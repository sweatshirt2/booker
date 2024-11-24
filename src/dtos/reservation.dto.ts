
export class ReservationDto {
  public constructor(
    public customer: string,
    public roomId: string,
    public companyId: string,
  ) { }
}
