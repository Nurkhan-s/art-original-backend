import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as fs from 'fs';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser());
  app.useGlobalGuards();
  app.setGlobalPrefix('/api');

  const config = new DocumentBuilder()
    .setTitle('Pictures example')
    .setDescription('The artOriginal/pictures API description')
    .setVersion('1.0')
    .setBasePath('/api')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  fs.writeFileSync('./swagger-spec.json', JSON.stringify(document));

  await app.listen(3000);
}

bootstrap();
