import { RoomTypes } from "../entities/Room";

export class RoomDto {
  public constructor(
    public price: number,
    public floor: number,
    public roomType: RoomTypes,
    public companyId: string,
  ) { }
}