import { Entity, Column, PrimaryGeneratedColumn, } from "typeorm";

enum RoomTypes {
  SINGLE = 'Single',
  DOUBLE = 'Double',
  TWIN = 'Twin',
  STANDARD = 'Standard Family',
  FAMILY = 'Family',
};

@Entity()
export class Image {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({
    type: 'string',
    nullable: false,
    unique: true,
  })
  url!: string;

  @Column({
    type: 'enum',
    enum: RoomTypes,
    name: 'room_type',
    nullable: false,
  })
  roomType!: RoomTypes;

  // relation with company
}

@Entity()
export class Room {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

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
  isOccupied!: boolean;

  // relation with company
}
