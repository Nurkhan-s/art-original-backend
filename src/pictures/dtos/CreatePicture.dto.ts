import { IsInt, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { PictureOrientation } from './PictureOrientation';

export class CreatePictureDto {
  @ApiProperty({
    example: 'Рассвет',
    description: 'Название картинки'
  })
  name: string;

  @ApiProperty({
    example: 1999,
    description: 'Год создания картинки'
  })
  @IsInt()
  year: number;

  @ApiProperty({
    example: 'Кастеев А',
    description: 'Автор картинки'
  })
  author: string;

  @ApiProperty({
    example: '400x400',
    description: 'Размер картинки'
  })
  size: string;

  @ApiProperty({
    example: 'Маслом',
    description: 'Тип картинки'
  })
  type: string;

  @ApiProperty({
    example: '1 000 000 KZT',
    description: 'Прайс картинки'
  })
  price: string;

  @ApiProperty({
    example: 'VERTICAL',
    description: 'Ориентация картинки'
  })
  orientation: PictureOrientation;

  @ApiProperty({
    example:
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.indiewire.com%2Ffeatures%2Fgeneral%2Fbaz-luhrmann-the-great-gatsby-underrated-leonardo-dicaprio-carey-mulligan-1201799900%2F&psig=AOvVaw3qL24N30HiEkr9HEE8E8Vm&ust=1692608559049000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCLD00rLw6oADFQAAAAAdAAAAABAD',
    description: 'Ссылка на картинку'
  })
  pictures: string;
}
