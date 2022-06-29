import IUserRepository from '../../../user/repositories/IUsersRepository';
import { IAuthenticateUserDTO } from './AuthenticateUserDTO';

export class AuthenticateUserUseCase {
  constructor(private repository: IUserRepository) {}

  public async execute(props: IAuthenticateUserDTO) {
    const user = await this.repository.findByEmail(props.email);

    if (!user) {
      throw new Error('Usuário não registrado.');
    }

    const isValidPassword = user.password == props.password;

    if (!isValidPassword) {
      throw new Error('Usuário não autorizado.');
    }

    return user.valueOf();
  }
}
