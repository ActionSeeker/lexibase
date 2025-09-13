import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PrismaModule } from './infra/config/prisma/prisma.module';
import { LemmaModule } from './lemma/lemma.module';

@Module({
  imports: [UserModule, PrismaModule, LemmaModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
