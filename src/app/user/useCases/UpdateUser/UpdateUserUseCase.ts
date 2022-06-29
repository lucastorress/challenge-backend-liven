import IUsersRepository from '../../repositories/IUsersRepository';
import { IUpdateUserDTO } from './UpdateUserDTO';
import validateEmail from '../../entities/helpers/validateEmail';

export class UpdateUserUseCase {
  constructor(private repository: IUsersRepository) {}

  public async execute(props: IUpdateUserDTO) {
    const isValidEmail = validateEmail(props.email);

    if (!isValidEmail) {
      throw new Error('E-mail inválido.');
    }

    const searchUserByEmail = await this.repository.findByEmail(props.email);

    if (searchUserByEmail) {
      throw new Error('Usuário já cadastrado.');
    }

    return await this.repository.save(props);
  }
}
