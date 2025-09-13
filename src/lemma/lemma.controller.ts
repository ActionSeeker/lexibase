
import { PrismaService } from '../infra/config/prisma/prisma.service';
import { Controller, Post, Body } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateLemmaDto } from './dto/create-lemma.dto';

@ApiTags('lemmas')
@Controller('lemma')
export class LemmaController {
    constructor(private prisma: PrismaService) { }

    @Post()
    @ApiOperation({ summary: 'Create a new lemma' })
    @ApiBody({ type: CreateLemmaDto })
    @ApiResponse({ status: 201, description: 'Lemma created successfully' })
    @ApiResponse({ status: 400, description: 'Validation failed' })
    async createLemma(@Body() createLemmaDto: CreateLemmaDto): Promise<void> {
        try {
            await this.prisma.lemma.create({
                data: {
                    lemma: createLemmaDto.lemma,
                    partOfSpeech: createLemmaDto.partOfSpeech,
                    language: {
                        connect: { id: createLemmaDto.languageId }, // link to Language
                    },
                },
            })
        } catch (err) {
            console.log(err);
            throw err;
        }
    }
}
