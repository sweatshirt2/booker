import { Room } from "../entities/Room";

export default class RoomController {
  static index(): Room[] {
    console.log(`Room controller, Index of rooms controller`);
    return [];
  }

  static create(body: Partial<Room>): Partial<Room> & { message: string } {
    console.log(`Room controller, create room ${JSON.stringify(body)}`);
    return { message: 'room created successfully', ...body }
  }

  static details(id: string): Partial<Room> {
    console.log(`Room controller, Show of room ${id}`);
    return { id };
  }

  static update(id: string, body: Partial<Room>): Partial<Room> & { message: string } {
    console.log(`Room controller, update room with id ${id}`);
    return { message: 'room updated successfully', ...body };
  }

  static destroy(id: string) {
    console.log(`Room controller, removed room with id ${id}`);
    return { message: 'room removed successfully' };
  }
}
