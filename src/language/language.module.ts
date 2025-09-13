import { Module } from '@nestjs/common';
import { PrismaModule } from '@/infra/config/prisma/prisma.module';
import { LanguageController } from './language.controller';

@Module({
    imports: [PrismaModule],
    controllers: [LanguageController],
    // providers: [UserRepository],
})

export class LanguageModule { }
