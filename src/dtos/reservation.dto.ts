
export class ReservationDto {
  public constructor(
    public customer: string,
    public roomId: string,
    public startDate: string,
    public endDate: string,
  ) { }
}