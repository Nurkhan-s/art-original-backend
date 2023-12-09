import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Picture } from '../../../typeorm/entities/Picture';
import { CreatePictureParams, EditPictureParams } from '../../../utils/types';

@Injectable()
export class PicturesService {
  constructor(
    @InjectRepository(Picture) private pictureRepository: Repository<Picture>
  ) {}

  findPictures() {
    return this.pictureRepository.find();
  }

  createPicture(pictureDetails: CreatePictureParams) {
    const newPicture = this.pictureRepository.create(pictureDetails);
    return this.pictureRepository.save(newPicture);
  }

  editPicture(id: number, editPictureDetails: EditPictureParams) {
    return this.pictureRepository.update({ id }, editPictureDetails);
  }

  deletePicture(id: number) {
    return this.pictureRepository.delete({ id });
  }
}
