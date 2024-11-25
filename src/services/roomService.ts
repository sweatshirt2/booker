import { RoomTypes } from "../entities/Room";

export class RoomService {
  static convertRoomType(rawRoomType: string): RoomTypes {
    switch (rawRoomType) {
      case 'single':
        return RoomTypes.SINGLE;

      case 'double':
        return RoomTypes.DOUBLE;

      case 'standard':
        return RoomTypes.STANDARD;

      case 'family':
        return RoomTypes.FAMILY;

      case 'twin':
        return RoomTypes.TWIN;

      default:
        throw new Error("Room type does not match the schema");
    }
  }
}