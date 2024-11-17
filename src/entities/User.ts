import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({
    type: 'string',
    nullable: false,
  })
  name!: string;

  // relation with company
}
