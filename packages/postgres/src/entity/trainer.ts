import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { Subcategory } from './subcategory';
import { Comment } from './comment';

@Entity()
export class Trainer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 50,
  })
  name: string;

  @Column({
    length: 50,
  })
  lastName: string;

  @Column({
    type: 'char',
    length: 200,
  })
  description: string;

  @Column({
    type: 'char',
    length: 100,
    nullable: true,
  })
  image: string;

  @ManyToMany(() => Subcategory, (subcategory) => subcategory.category)
  @JoinTable()
  subcategories: Subcategory[];

  @OneToMany(() => Comment, (comment) => comment.trainer)
  comments: Comment[];
}
