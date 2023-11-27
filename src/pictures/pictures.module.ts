import { forwardRef, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Picture } from "../typeorm/entities/Picture";
import { PicturesService } from "./services/pictures/pictures.service";
import { PictureController } from "./controllers/pictures/pictures.controller";

@Module({
  imports: [TypeOrmModule.forFeature([Picture])],
  controllers: [PictureController],
  providers: [PicturesService]
})
export class PictureModule {}
