import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { PicturesService } from '../../services/pictures/pictures.service';
import { CreatePictureParams, EditPictureParams } from '../../../utils/types';
import { CreatePictureDto } from '../../dtos/CreatePicture.dto';

@Controller('pictures')
export class PictureController {
  constructor(private pictureService: PicturesService) {}
  @Get()
  getPictures() {
    return this.pictureService.findPictures();
  }

  @Post()
  createPicture(@Body() createPictureDto: CreatePictureDto) {
    return this.pictureService.createPicture(createPictureDto);
  }

  @Put(':id')
  async editPictureById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: EditPictureParams,
  ) {
    await this.pictureService.editPicture(id, updateUserDto);
  }

  @Delete(':id')
  async deletePictureById(@Param('id', ParseIntPipe) id: number) {
    await this.pictureService.deletePicture(id);
  }
}
