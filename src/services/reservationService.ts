import { appDataSource } from "../utils/data-source"
import { Reservation } from "../entities/Reservation";

export class ReservationService {
  static reservationRepository = appDataSource.getRepository(Reservation);
  static async generateUserId(): Promise<string> {
    const reservationsCount = await this.reservationRepository.count();
    const now = new Date().toISOString().split('T')[1];
    return `Res-${reservationsCount}${now}`;
  }
}