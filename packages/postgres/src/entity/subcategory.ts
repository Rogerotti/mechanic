import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Category } from './category';

@Entity()
export class Subcategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 50,
  })
  name: string;

  @Column({
    type: 'char',
    length: 200,
  })
  description: string;

  @ManyToOne(() => Category, (category) => category.subcategories)
  category: Category;
}
