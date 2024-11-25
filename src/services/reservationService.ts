import { appDataSource } from "../utils/data-source"
import { Reservation } from "../entities/Reservation";

export class ReservationService {
  static reservationRepository = appDataSource.getRepository(Reservation);
  static async generateUserId(): Promise<string> {
    const reservationsCount = await this.reservationRepository.count();
    const now = new Date().toISOString().split('T')[1];
    return `Res-${reservationsCount}${now}`;
  }

  static transformDates(startDate: string, endDate: string): Date[] {
    try {
      return [new Date(startDate), new Date(endDate)];
    } catch (error) {
      throw error;
    }
  }
}