import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Trainer } from './trainer';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 250,
  })
  description: string;

  @Column()
  rating: number;

  @Column()
  date: Date;

  @ManyToOne(() => Trainer, (trainer) => trainer.comments)
  trainer: Trainer;
}
