import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import { User } from "./User";
import { Company } from "./Company";
import { Room } from "./Room";

@Entity()
export class Reservation {
  @PrimaryGeneratedColumn("uuid")
  id?: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  customer?: string;

  @Column({
    type: 'varchar',
    name: 'reservation_number',
    nullable: false,
  })
  reservationNumber?: string;

  @ManyToOne(() => Company, (company) => company.reservations)
  @JoinColumn({ name: 'company_id' })
  company?: Company;

  @ManyToOne(() => Room, (room) => room.reservations)
  @JoinColumn({ name: 'room_id' })
  room?: Room;

  @ManyToOne(() => User, (user) => user.reservations)
  @JoinColumn({ name: 'user_id' })
  user?: User;
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

  @OneToOne(() => Reservation)
  @JoinColumn({ name: 'reservation_id' })
  reservation?: Reservation;
}
