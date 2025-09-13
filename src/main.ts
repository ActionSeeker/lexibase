import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT || 3000;

  app.enableCors();
  const config = new DocumentBuilder()
    .setTitle('Polygloss API')
    .setDescription('Multilingual glossary API (Tamil/Farsi): languages, lemmas, forms')
    .setVersion('1.0.0')
    // .addBearerAuth() // if/when you add auth
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document, {
    swaggerOptions: { persistAuthorization: true },
  });


  await app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
  });
}
bootstrap();
