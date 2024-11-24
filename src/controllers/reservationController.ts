import { appDataSource } from "../utils/data-source";
import { ReservationDto } from "../dtos/reservation.dto";
import { Reservation } from "../entities/Reservation"
import { ReservationService } from "../services/reservationService";

export default class ReservationController {
  static reservationsRepository = appDataSource.getRepository(Reservation);
  static async index(): Promise<Reservation[]> {
    const reservations = await this.reservationsRepository.find({
      select: ['reservationNumber', 'customer'],
      relations: ['room'],
    });
    console.log(`In the reservation index controller`);
    for (const reservation of reservations) {
      console.log(reservation);
    }
    return reservations;
  }

  static async create(body: ReservationDto): Promise<Partial<Reservation> & { message: string }> {
    const reservationId = await ReservationService.generateUserId();
    const processedReservation = this.reservationsRepository.create({
      customer: body.customer,
      reservationNumber: reservationId,
      company: { id: body.companyId },
      room: { id: body.roomId },
    });
    console.log("the processed reservation is");
    console.log(processedReservation);
    const reservation = await this.reservationsRepository.save(processedReservation);
    console.log(`In the reservation create controller with the body ${JSON.stringify(reservation)}`)
    return { message: 'created successfully', ...processedReservation };
  }

  static async details(id: string): Promise<Partial<Reservation>> {
    const reservation = await this.reservationsRepository.findOneOrFail({ where: { id } });
    console.log(`In the reservation details controller with id ${id}`);
    return reservation;
  }

  static async update(id: string, body: Partial<Reservation>): Promise<Partial<Reservation> & { message: string }> {
    console.log(`In the reservation update controller with the id ${id} and body ${JSON.stringify({ ...body, id })}`)
    return { message: 'updated successfully', ...body };
  }

  static async destroy(id: string) {
    const reservation = this.reservationsRepository.delete(id);

    console.log(`In the reservation delete controller with the body ${id}`)
    return { message: 'deleted successfully' };
  }
}
