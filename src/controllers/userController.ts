import { appDataSource } from "../utils/data-source";
import { Image } from "../entities/Room";
import { User } from "../entities/User";

export default class UserController {

  static userRepository = appDataSource.getRepository(User);

  static async index(): Promise<User[]> {
    const users = await this.userRepository.find();
    console.log(users);
    console.log(`In the user controller`);
    return [];
  }

  static async details(id: string): Promise<Partial<User>> {
    const user = await this.userRepository.findOne({
      where: { id },
    });
    console.log(user);
    console.log(`User controller, Details for user ${id}`);
    return { id };
  }

  static async create(createUserDto: Partial<User>): Promise<Partial<User> & { message: string }> {
    const user = this.userRepository.create({
      name: createUserDto.name,
      company: createUserDto.company,
    });
    console.log(`User controller, create user ${JSON.stringify(createUserDto)}`);
    return { message: 'created successfully', ...createUserDto };
  }

  static async update(id: string, updateUserDto: Partial<User>): Promise<Partial<User> & { message: string }> {
    console.log(`user controller, updated user ${id} with ${JSON.stringify(updateUserDto)}`);
    return { message: 'updated successfully', ...updateUserDto }
  }

  static async destroy(id: string) {
    console.log(`user controller, removed item ${id}`);
    return { message: 'removed successfully' };
  }
}