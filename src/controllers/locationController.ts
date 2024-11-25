import { appDataSource } from "../utils/data-source";
import { LocationDto } from "../dtos/company.dto";
import { Location } from "../entities/Company";

export default class LocationController {
  static locationRepository = appDataSource.getRepository(Location);

  static async index(): Promise<Location[]> {
    const locations = await this.locationRepository.find();

    return locations;
  }

  static async details(id: string): Promise<Location> {
    const location = await this.locationRepository.findOneOrFail({ where: { id } });

    return location;
  }

  static async create(body: LocationDto) {
    const processedLocation = this.locationRepository.create({
      ...body
    });

    console.log("Processed Body \n", processedLocation);
    const location = await this.locationRepository.save(processedLocation);

    console.log("Saved body \n", location);
    return location;
  }

  static async update(id: string, body: Partial<LocationDto>) {
    console.log(`In the update method for ${body} of id ${id}`);
  }

  static async delete(id: string) {
    const location = await this.locationRepository.delete(id);
  }
}
