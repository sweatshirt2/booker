import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
  OneToMany,
  JoinTable,
  ManyToMany,
  OneToOne,
} from "typeorm";
import { Company } from "./Company";
import { Reservation } from "./Reservation";

export enum RoomTypes {
  SINGLE = 'Single',
  DOUBLE = 'Double',
  TWIN = 'Twin',
  STANDARD = 'Standard Family',
  FAMILY = 'Family',
};

@Entity()
export class Room {
  @PrimaryGeneratedColumn("uuid")
  id?: string;

  @Column({
    type: 'decimal',
    nullable: false,
  })
  price!: number;

  @Column({
    type: 'tinyint',
    nullable: false,
  })
  floor!: number;

  @Column({
    type: 'enum',
    enum: RoomTypes,
    name: 'room_type',
    nullable: false,
  })
  roomType!: RoomTypes;

  @Column({
    type: 'boolean',
    name: 'is_occupied',
    default: false,
  })
  isOccupied?: boolean;

  @ManyToOne(() => Company, (company) => company.rooms, { nullable: false })
  @JoinColumn({ name: 'company_id' })
  company!: Company;

  @OneToMany(() => Reservation, (reservation) => reservation.room)
  reservations?: Reservation[];

  @ManyToMany(() => Feature)
  @JoinTable()
  features?: Feature[];
}

@Entity()
export class Image {
  @PrimaryGeneratedColumn("uuid")
  id?: string;

  @Column({
    type: 'varchar',
    nullable: false,
    unique: true,
  })
  url?: string;

  @Column({
    type: 'enum',
    enum: RoomTypes,
    name: 'room_type',
    nullable: false,
  })
  roomType?: RoomTypes;

  @ManyToOne(() => Company, (company) => company.images, { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'company_id' })
  company?: Company;
}

@Entity()
export class Feature {
  @PrimaryGeneratedColumn("uuid")
  id?: string;

  @Column({
    type: 'varchar',
    nullable: false,
    unique: true,
  })
  name?: string;
}


// Todo -> add features
// ? hot shower, wifi, tv, dstv, balcony, breakfast,
