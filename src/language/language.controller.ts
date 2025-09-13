
import { PrismaService } from '../infra/config/prisma/prisma.service';
import { Controller, Post, Body, ConflictException } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateLanguageDto } from './dto/create-language.dto';

@ApiTags('language')
@Controller('language')
export class LanguageController {
    constructor(private prisma: PrismaService) { }

    @Post()
    @ApiOperation({ summary: 'Create language' })
    @ApiBody({ type: CreateLanguageDto })
    @ApiResponse({ status: 201, description: 'Created' })
    @ApiResponse({ status: 409, description: 'Duplicate code' })
    async createLanguage(@Body() createLanguageDto: CreateLanguageDto): Promise<void> {
        try {
            await this.prisma.language.create({ data: createLanguageDto });
        } catch (e: any) {
            // Prisma unique constraint
            if (e.code === 'P2002' && e.meta?.target?.includes('code')) {
                throw new ConflictException('Language code already exists');
            }
            throw e;
        }
    }
}
