import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { Picture } from "./typeorm/entities/Picture";
import { PictureModule } from "./pictures/pictures.module";
import { UsersModule } from "./users/users.module";
import { User } from "./users/user.entity";
import { AuthModule } from "./auth/auth.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "theGreat@123",
      database: "artOriginal",
      entities: [Picture, User],
      synchronize: false
    }),
    PictureModule,
    UsersModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
