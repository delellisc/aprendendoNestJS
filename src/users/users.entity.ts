
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 250 })
  name: string;

  @Column({ length: 250 })
  email: string;
  
  @Column({ length: 250 })
  login: string;

  @Column({ length: 250 })
  password: string;
  
//   colunas da classe "Photo"
//   @Column({ length: 500 })
//   name: string;

//   @Column('text')
//   description: string;

//   @Column()
//   filename: string;

//   @Column('int')
//   views: number;

//   @Column()
//   isPublished: boolean;
}
