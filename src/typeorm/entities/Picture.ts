import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { PictureOrientation } from "../../pictures/dtos/PictureOrientation";

@Entity({ name: "pictures" })
export class Picture {
  @PrimaryGeneratedColumn({ type: "bigint" })
  id: number;

  @Column()
  name: string;

  @Column()
  year: number;

  @Column()
  author: string;

  @Column()
  size: string;

  @Column()
  type: string;

  @Column()
  price: string;

  @Column()
  orientation: PictureOrientation;
}
