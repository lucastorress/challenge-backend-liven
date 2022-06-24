import User from '../entity/props/User';

export default interface IUserRepository {
  findUserById(id: string): Promise<User | undefined>;
  findUserByEmail(email: string): Promise<User | undefined>;
  saveUser(data: User): Promise<User>;
  updateUser(id: string, data: User): Promise<User>;
  removeUser(id: string): Promise<boolean>;
}
