import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToMany,
  ManyToOne,
} from "typeorm";
import { Reservation } from "./Reservation";
import { Company } from "./Company";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  name!: string;

  @OneToMany(() => Reservation, (reservation) => reservation.user)
  @JoinColumn()
  reservations!: Reservation[];

  @ManyToOne(() => Company, (company) => company.users)
  @JoinColumn({ name: 'company_id' })
  company!: Company;
}
