import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Location {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({
    type: 'string',
    nullable: false,
  })
  city!: string;

  @Column({
    type: 'string',
    nullable: false,
  })
  subCity!: string;

  @Column({
    type: 'string',
    nullable: false,
  })
  neighborhood!: string;

  @Column({
    type: 'string',
    nullable: false,
    unique: true,
  })
  url!: string;
}

@Entity()
export class Company {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({
    type: 'string',
    nullable: false,
    unique: true,
  })
  name!: string;

  // relation with location
}
