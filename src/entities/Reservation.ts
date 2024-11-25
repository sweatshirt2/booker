import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
  BeforeInsert,
  LessThanOrEqual,
  MoreThanOrEqual,
} from "typeorm";
import { User } from "./User";
import { Company } from "./Company";
import { Room } from "./Room";
import ReservationController from "../controllers/reservationController";

@Entity()
export class Reservation {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  customer!: string;

  @Column({
    type: 'varchar',
    name: 'reservation_number',
    nullable: false,
  })
  reservationNumber!: string;

  @Column({
    type: 'date',
    name: 'start_date',
    nullable: false,
  })
  startDate!: Date;

  @Column({
    type: 'date',
    name: 'end_date',
    nullable: false,
  })
  endDate!: Date;

  @ManyToOne(() => Room, (room) => room.reservations, { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'room_id' })
  room!: Room;

  @ManyToOne(() => User, (user) => user.reservations)
  @JoinColumn({ name: 'user_id' })
  user?: User;

  @OneToOne(() => Receipt, (receipt) => receipt.reservation, { onDelete: 'SET NULL' })
  @JoinColumn({ name: 'receipt_id' })
  receipt?: Receipt;

  @BeforeInsert()
  verifyTimeRange() {
    if (this.startDate > this.endDate) {
      throw new Error(`Start Date cannot be before End Date`);
    }
  }

  @BeforeInsert()
  async hasNonOverlappedTime() {
    const existingReservations = await ReservationController.reservationsRepository.findOne({
      where: {
        startDate: LessThanOrEqual(this.endDate),
        endDate: MoreThanOrEqual(this.startDate),
        room: {
          id: this.room.id,
        },
      },
    });

    if (existingReservations) {
      throw new Error(
        `The room is reserved from
        ${existingReservations.startDate.toISOString().split('T')[0]}
        to
        ${existingReservations.endDate.toISOString().split('T')[0]}
        `);
    }
  }
}

@Entity()
export class Receipt {
  @PrimaryGeneratedColumn("uuid")
  id?: string;

  @Column({
    type: 'varchar',
    name: 'screenshot_url',
    nullable: false,
  })
  screenshotUrl?: string;

  @OneToOne(() => Reservation, (reservation) => reservation.receipt, { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'reservation_id' })
  reservation?: Reservation;
}
