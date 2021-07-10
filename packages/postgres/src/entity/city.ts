import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Location } from './location';
@Entity()
export class City {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({
    length: 50,
  })
  name: string;

  @OneToMany(() => Location, (location) => location.city)
  locations: Location[];
}
