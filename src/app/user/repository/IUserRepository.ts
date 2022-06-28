import { User, UserProps } from '../entity/User';

export default interface IUserRepository {
  findUserById(id: string): Promise<User | null>;
  findUserByEmail(email: string): Promise<User | null>;
  saveUser(user: UserProps): Promise<User>;
  updateUser(id: string, user: UserProps): Promise<User>;
  removeUser(id: string): Promise<boolean>;
}
