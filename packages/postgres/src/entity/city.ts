import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class City {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 50,
  })
  name: string;
}
