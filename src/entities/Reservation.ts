import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Reservation {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({
    type: 'string',
    nullable: false,
  })
  customer!: string;

  @Column({
    type: 'string',
    name: 'reservation_number',
    nullable: false,
  })
  reservationNumber!: string;

  // relation with company
  // relation with room
  // relation with user
  // relation with receipt
}

@Entity()
export class Receipt {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({
    type: 'string',
    name: 'screenshot_url',
    nullable: false,
  })
  screenshotUrl!: string;
}
