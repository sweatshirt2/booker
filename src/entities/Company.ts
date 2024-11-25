import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { User } from "./User";
import { Image, Room } from "./Room";
import { Reservation } from "./Reservation";

@Entity()
export class Location {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  city!: string;

  @Column({
    type: 'varchar',
    name: 'sub_city',
    nullable: false,
  })
  subCity!: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  neighborhood!: string;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  url?: string;
}

@Entity()
export class Company {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({
    type: 'varchar',
    nullable: false,
    unique: true,
  })
  name!: string;

  // ? optional params to relation decorators
  @OneToOne(() => Location)
  @JoinColumn({ name: 'location_id' })
  location?: Location;

  @OneToMany(() => User, (user) => user.company)
  @JoinColumn()
  users?: User[];

  @OneToMany(() => Room, (room) => room.company)
  @JoinColumn()
  rooms?: Room[];

  @OneToMany(() => Image, (image) => image.company)
  @JoinColumn()
  images?: Image[];
}
