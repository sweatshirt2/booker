import { appDataSource } from "../utils/data-source"
import { Reservation } from "../entities/Reservation";

export class ReservationService {
  static reservationRepository = appDataSource.getRepository(Reservation);
  static async generateUserId(): Promise<string> {
    const latestReservation = await this.reservationRepository.findOne({
      order: { createdAt: 'DESC' },
      select: ['reservationNumber'],
    });

    if (!latestReservation) {
      return `Res-000001`;
    }

    const currentEnd = parseInt(latestReservation.reservationNumber.slice(4));
    const finalNumber = parseInt(String(currentEnd).slice(String(currentEnd).length - 1));
    const leadingZeros = 6 - String(currentEnd).length + finalNumber === 9 ? 1 : 0;

    const newReservationNumber = `Res-${'0'.repeat(leadingZeros)}${currentEnd + 1}`;

    return newReservationNumber;
  }

  static transformReservationDates(startDate: string, endDate: string): Date[] {
    try {
      return [new Date(startDate), new Date(endDate)];
    } catch (error) {
      throw error;
    }
  }
}