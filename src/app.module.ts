import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PrismaModule } from './infra/config/prisma/prisma.module';
import { LemmaModule } from './lemma/lemma.module';
import { LanguageModule } from './language/language.module';

@Module({
  imports: [UserModule, PrismaModule, LemmaModule, LanguageModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
