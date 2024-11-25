
export class CompanyDto {
  public constructor(
    public name: string,
    public locationId: string,
  ) { }
}

export class LocationDto {
  public constructor(
    public city: string,
    public subCity: string,
    public neighborhood: string,
    public url?: string,
  ) { }
}
