import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { City } from './city';
import { Trainer } from './trainer';

@Entity()
export class Location {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 50,
    nullable: true,
  })
  name: string;

  @Column({
    length: 50,
  })
  streetName: string;

  @Column()
  streetNumber: number;

  @ManyToOne(() => City, (city) => city.locations)
  city: City;

  @ManyToOne(() => Trainer, (trainer) => trainer.locations)
  trainer: Trainer;
}
