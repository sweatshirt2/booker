import { appDataSource } from '../utils/data-source';
import { CompanyDto } from '../dtos/company.dto';
import { Company } from '../entities/Company';
export class CompanyController {
  static companyRepository = appDataSource.getRepository(Company);
  static async index(): Promise<Company[]> {
    const companies = await this.companyRepository.find({
      select: ['name'],
      relations: ['location'],
    });
    return companies;
  }

  static async create(body: CompanyDto): Promise<Partial<Company> & { message: string }> {
    const processedCompany = this.companyRepository.create({
      name: body.name,
      location: { id: body.locationId },
    });

    const company = await this.companyRepository.save(processedCompany);
    return { message: "Company created successfully", ...company };
  }

  static async details(id: string): Promise<Company> {
    const company = await this.companyRepository.findOneOrFail({ where: { id } });

    return company;
  }

  static async update(id: string, body: Partial<Company>) {
    console.log("updating the company...");
  }

  static async destroy(id: string) {
    const company = await this.companyRepository.delete(id);

    return company;
  }
}