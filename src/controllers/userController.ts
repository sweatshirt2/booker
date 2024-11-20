import { Image } from "../entities/Room";
import { User } from "../entities/User";

export default class UserController {
  static index(): User[] {
    console.log(`In the user controller`);
    return [];
  }

  static details(id: string): Partial<User> {
    console.log(`User controller, Details for user ${id}`);
    return { id };
  }

  static create(createUserDto: Partial<User>): Partial<User> & { message: string } {
    console.log(`User controller, create user ${JSON.stringify(createUserDto)}`);
    return { message: 'created successfully', ...createUserDto };
  }

  static update(id: string, updateUserDto: Partial<User>): Partial<User> & { message: string } {
    console.log(`user controller, updated user ${id} with ${JSON.stringify(updateUserDto)}`);
    return { message: 'updated successfully', ...updateUserDto }
  }

  static destroy(id: string) {
    console.log(`user controller, removed item ${id}`);
    return { message: 'removed successfully' };
  }
}