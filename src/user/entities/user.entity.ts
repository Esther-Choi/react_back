import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

// user VO
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @PrimaryColumn()
  email: string;

  @Column()
  password: string;

  @Column()
  mobile: string;

}