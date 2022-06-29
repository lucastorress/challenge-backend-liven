import { DataSource, Repository } from 'typeorm';
import { User } from '../../entities/User';
import IUserRepository from '../IUsersRepository';
import { UserProps } from '../../entities/User';

export default class UserRepository implements IUserRepository {
  private repository: Repository<User>;

  constructor(database: DataSource) {
    this.repository = database.getRepository(User);
  }

  public async findUserById(id: string) {
    return await this.repository.findOne({ where: { id } });
  }

  public async findUserByEmail(email: string) {
    return await this.repository.findOne({ where: { email } });
  }

  public async saveUser(user: UserProps) {
    return await this.repository.save(user);
  }

  public async updateUser(id: string, data: UserProps) {
    await this.repository.update(id, { ...data });
    return await this.repository.findOne({ where: { id } });
  }

  public async removeUser(id: string) {
    const userToRemove = await this.repository.findOne({ where: { id } });
    try {
      return this.repository.remove(userToRemove) ? true : false;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
