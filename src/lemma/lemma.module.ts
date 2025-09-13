import { Module } from '@nestjs/common';
import { PrismaModule } from '@/infra/config/prisma/prisma.module';
import { LemmaController } from './lemma.controller';

@Module({
    imports: [PrismaModule],
    controllers: [LemmaController],
    // providers: [UserRepository],
})

export class LemmaModule { }
