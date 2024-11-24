import { appDataSource } from "../utils/data-source";
import { RoomDto } from "../dtos/room.dto";
import { Room } from "../entities/Room";
import { RoomService } from "../services/roomService";

export default class RoomController {
  static roomRepository = appDataSource.getRepository(Room);
  static async index(): Promise<Room[]> {
    const rooms = await this.roomRepository.find();
    console.log(`Room controller, Index of rooms controller`);
    return rooms;
  }

  static async create(body: RoomDto): Promise<Partial<Room> & { message: string }> {
    const roomType = RoomService.convertRoomType(body.roomType);
    const processedRoom = this.roomRepository.create({
      price: body.price,
      floor: body.floor,
      roomType,
      company: { id: body.companyId },
    });

    const room = await this.roomRepository.save(processedRoom);
    console.log(`Room controller, create room ${JSON.stringify(room)}`);

    return { message: 'room created successfully', ...room }
  }

  static async details(id: string): Promise<Partial<Room>> {
    const room = await this.roomRepository.findOneOrFail({ where: { id } });
    console.log(`Room controller, Show of room ${id}`);
    return room;
  }

  static async update(id: string, body: Partial<Room>): Promise<Partial<Room> & { message: string }> {
    console.log(`Room controller, update room with id ${id}`);
    return { message: 'room updated successfully', ...body };
  }

  static async destroy(id: string) {
    const room = await this.roomRepository.delete(id);
    console.log(`Room controller, removed room with id ${id}`);
    return { message: 'room removed successfully', ...room };
  }
}
