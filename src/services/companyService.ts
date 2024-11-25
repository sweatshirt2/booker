import { appDataSource } from "../utils/data-source"
import { Company } from "../entities/Company";

export class CompanyService {
  static companyRepository = appDataSource.getRepository(Company);
  static async generateCompanyId() {
    const companiesCount = await this.companyRepository.count();

    const now = new Date().toISOString().split('T')[0];
    return `CO-${companiesCount}${now}`;
  }
}