import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Comment } from './comment';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 255,
  })
  email: string;

  @Column({
    length: 50,
  })
  password: string;

  @Column({
    length: 50,
  })
  firstName: string;

  @Column({
    length: 100,
  })
  lastName: string;

  @Column({
    length: 100,
    nullable: true,
  })
  image: string;

  @OneToMany(() => Comment, (comment) => comment.user)
  comments: Comment[];
}
