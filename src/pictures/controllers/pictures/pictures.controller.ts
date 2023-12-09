import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards
} from '@nestjs/common';
import { PicturesService } from '../../services/pictures/pictures.service';
import { CreatePictureDto } from '../../dtos/CreatePicture.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Picture } from '../../../typeorm/entities/Picture';
import { UpdatePictureDto } from '../../dtos/UpdatePicture.dto';
import { JwtAuthGuard } from '../../../auth/guards/jwt-auth-guards';

@Controller('/pictures')
export class PictureController {
  constructor(private pictureService: PicturesService) {}

  @ApiTags('Pictures')
  @UseGuards(JwtAuthGuard)
  @Get()
  @ApiOperation({
    summary: 'Get pictures',
    description: 'Get all pictures'
  })
  getPictures(): Promise<Picture[]> {
    return this.pictureService.findPictures();
  }

  @ApiTags('Pictures')
  @Post()
  @ApiOperation({
    summary: 'Create picture',
    description: 'Add new picture'
  })
  createPicture(@Body() createPictureDto: CreatePictureDto): Promise<Picture> {
    return this.pictureService.createPicture(createPictureDto);
  }

  @ApiTags('Pictures')
  @Put(':id')
  @ApiOperation({
    summary: 'Update picture',
    description: 'Update picture by id'
  })
  editPictureById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdatePictureDto
  ) {
    return this.pictureService.editPicture(id, updateUserDto);
  }

  @ApiTags('Pictures')
  @Delete(':id')
  async deletePictureById(@Param('id', ParseIntPipe) id: number) {
    await this.pictureService.deletePicture(id);
  }
}
