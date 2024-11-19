import { Reservation } from "../entities/Reservation"

export default class ReservationController {
  static index(): Reservation[] {
    console.log(`In the reservation index controller`);
    return [];
  }

  static create(body: Partial<Reservation>): Partial<Reservation> & { message: string } {
    console.log(`In the reservation create controller with the body ${JSON.stringify(body)}`)
    return { message: 'created successfully', ...body };
  }

  static details(id: string): Partial<Reservation> {
    console.log(`In the reservation details controller with id ${id}`);
    return { id };
  }

  static update(id: string, body: Partial<Reservation>): Partial<Reservation> & { message: string } {
    console.log(`In the reservation update controller with the id ${id} and body ${JSON.stringify({ ...body, id })}`)
    return { message: 'updated successfully', ...body };
  }

  static destroy(id: string) {
    console.log(`In the reservation delete controller with the body ${id}`)
    return { message: 'deleted successfully' };
  }
}
