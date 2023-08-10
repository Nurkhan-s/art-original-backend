import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Picture } from './typeorm/entities/Picture';
import { PictureModule } from './pictures/pictures.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'theGreat@123',
      database: 'artOriginal',
      entities: [Picture],
      synchronize: true,
    }),
    PictureModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
