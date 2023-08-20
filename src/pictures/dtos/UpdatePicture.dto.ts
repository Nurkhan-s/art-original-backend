import { IsInt, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdatePictureDto {
  @ApiProperty({
    example: 'Рассвет',
    description: 'Название картинки',
  })
  name: string;

  @ApiProperty({
    example: 1999,
    description: 'Год создания картинки',
  })
  @IsInt()
  year: number;

  @ApiProperty({
    example: 'Кастеев А',
    description: 'Автор картинки',
  })
  author: string;

  @ApiProperty({
    example: 'Рассвет',
    description: 'Название картинки',
  })
  @IsString()
  pictures: string;

  @ApiProperty({
    example: '400x400',
    description: 'Размер картинки',
  })
  size: string;

  @ApiProperty({
    example: 'Маслом',
    description: 'Тип картинки',
  })
  type: string;
}
