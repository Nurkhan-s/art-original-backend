import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put
} from "@nestjs/common";
import { PicturesService } from "../../services/pictures/pictures.service";
import { CreatePictureParams, EditPictureParams } from "../../../utils/types";
import { CreatePictureDto } from "../../dtos/CreatePicture.dto";
import {
  ApiBody,
  ApiOperation,
  ApiProperty,
  ApiResponse,
  refs
} from "@nestjs/swagger";
import { Picture } from "../../../typeorm/entities/Picture";
import { UpdatePictureDto } from "../../dtos/UpdatePicture.dto";

const CreateUserDtoExample = {
  firstName: "Tester"
};

@Controller("pictures")
export class PictureController {
  constructor(private pictureService: PicturesService) {}
  @Get()
  @ApiOperation({
    summary: "Get pictures",
    description: "Get all pictures"
  })
  getPictures(): Promise<Picture[]> {
    return this.pictureService.findPictures();
  }

  @Post()
  @ApiOperation({
    summary: "Create picture",
    description: "Add new picture"
  })
  createPicture(@Body() createPictureDto: CreatePictureDto): Promise<Picture> {
    return this.pictureService.createPicture(createPictureDto);
  }

  @Put(":id")
  @ApiOperation({
    summary: "Update picture",
    description: "Update picture by id"
  })
  editPictureById(
    @Param("id", ParseIntPipe) id: number,
    @Body() updateUserDto: UpdatePictureDto
  ) {
    return this.pictureService.editPicture(id, updateUserDto);
  }

  @Delete(":id")
  async deletePictureById(@Param("id", ParseIntPipe) id: number) {
    await this.pictureService.deletePicture(id);
  }
}
