import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'pictures' })
export class Picture {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column()
  year: number;

  @Column()
  size: string;

  @Column()
  pictures: string;
}
