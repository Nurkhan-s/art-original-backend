import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import * as fs from "fs";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle("Pictures example")
    .setDescription("The artOriginal/pictures API description")
    .setVersion("1.0")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);
  fs.writeFileSync("./swagger-spec.json", JSON.stringify(document));

  app.useGlobalGuards();

  await app.listen(3000);
}

bootstrap();
