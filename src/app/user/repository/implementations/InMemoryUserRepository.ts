import { User, UserProps } from '../../entity/User';
import IUserRepository from '../IUserRepository';

export class InMemoryUserRepository implements IUserRepository {
  public items: User[] = [];

  async findUserById(id: string): Promise<User | null> {
    const user = this.items.find((user) => user.id === id);

    if (!user) {
      return null;
    }

    return user;
  }

  async findUserByEmail(email: string): Promise<User | null> {
    const user = this.items.find((user) => user.email === email);

    if (!user) {
      return null;
    }

    return user;
  }

  async saveUser(user: UserProps): Promise<User> {
    const newUser = await User.create(user);
    this.items.push(newUser);
    return newUser;
  }

  async updateUser(id: string, user: UserProps): Promise<User> {
    const userIndex = this.items.findIndex((user) => user.id === id);
    const userUpdated = User.create(user);
    this.items[userIndex] = userUpdated;
    return userUpdated;
  }

  async removeUser(id: string): Promise<boolean> {
    const userIndex = this.items.findIndex((user) => user.id === id);

    if (userIndex > -1) {
      this.items.splice(userIndex, 1);
      return true;
    }

    return false;
  }
}
