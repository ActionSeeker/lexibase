import { Controller, Post, Body } from '@nestjs/common';
// import { CreateUserUseCase } from '../../data/use-cases/createUser.usecase';
import { CreateLemmaDto } from './dto/create-lemma.dto';

@Controller('lemma')
export class UserController {
    //   constructor(private readonly createUserUseCase: CreateUserUseCase) {}

    @Post()
    async createUser(@Body() createLemma: CreateLemmaDto): Promise<void> {

    }
}
