import { Controller, Post, Body } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
// import { CreateUserUseCase } from '../../data/use-cases/createUser.usecase';
import { CreateLemmaDto } from './dto/create-lemma.dto';

@ApiTags('lemmas')
@Controller('lemma')
export class LemmaController {
    //   constructor(private readonly createUserUseCase: CreateUserUseCase) {}

    @Post()
    @ApiOperation({ summary: 'Create a new lemma' })
    @ApiBody({ type: CreateLemmaDto })
    @ApiResponse({ status: 201, description: 'Lemma created successfully' })
    @ApiResponse({ status: 400, description: 'Validation failed' })
    async createLemma(@Body() createLemmaDto: CreateLemmaDto): Promise<void> {

    }
}
