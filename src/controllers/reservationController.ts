import { appDataSource } from "../utils/data-source";
import { ReservationDto } from "../dtos/reservation.dto";
import { Reservation } from "../entities/Reservation"
import { ReservationService } from "../services/reservationService";

export default class ReservationController {
  static reservationsRepository = appDataSource.getRepository(Reservation);
  static async index() {
    const reservations = await this.reservationsRepository.find({
      select: ['reservationNumber', 'customer'],
      relations: ['room'],
      // select: {
      //   reservationNumber: true,
      //   customer: true,
      //   room: {
      //     floor: true,
      //     price: true,
      //     roomType: true,
      //     isOccupied: true,
      //   },
      // }
    });

    // const reservations = await this.reservationsRepository
    //   .createQueryBuilder('reservation')
    //   .leftJoinAndSelect('reservation.room', 'room')
    //   .addSelect(['room.floor', 'room.price', 'room.roomType', 'room.isOccupied'])
    //   .select(['reservation.reservationNumber', 'reservation.customer'])
    //   .getMany();

    for (const reservation of reservations) {
      console.log(reservation);
    }

    return reservations.map((reservation) => {
      const { reservationNumber, customer, room } = reservation;
      return {
        reservationNumber,
        customer,
        room: {
          type: room?.roomType,
          floor: room?.floor,
          price: room?.price,
        },
      }
    })
  }

  static async create(body: ReservationDto): Promise<Partial<Reservation> & { message: string }> {
    try {
      const [startDate, endDate] = ReservationService.transformReservationDates(body.startDate, body.endDate);
      const reservationId = await ReservationService.generateUserId();

      const processedReservation = this.reservationsRepository.create({
        customer: body.customer,
        reservationNumber: reservationId,
        room: { id: body.roomId },
        startDate,
        endDate,
      });

      const reservation = await this.reservationsRepository.save(processedReservation);
      console.log(reservation);

      return { message: 'created successfully', ...processedReservation };
    } catch (error) {
      throw error;
    }
  }

  static async details(id: string): Promise<Partial<Reservation>> {
    const reservation = await this.reservationsRepository.findOneOrFail({ where: { id } });
    console.log(`In the reservation details controller with id ${id}`);
    return reservation;
  }

  static async update(id: string, body: Partial<ReservationDto>): Promise<Partial<Reservation> & { message: string }> {
    console.log(`In the reservation update controller with the id ${id} and body ${JSON.stringify({ ...body, id })}`)
    return { message: 'updated successfully' };
  }

  static async destroy(id: string) {
    const reservation = this.reservationsRepository.delete(id);

    console.log(`In the reservation delete controller with the body ${id}`)
    return { message: 'deleted successfully' };
  }
}
