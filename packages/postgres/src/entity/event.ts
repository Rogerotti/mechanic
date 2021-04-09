import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Trainer } from './trainer';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  description: string;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @ManyToOne(() => Trainer, (trainer) => trainer.events)
  trainer: Trainer;
}
