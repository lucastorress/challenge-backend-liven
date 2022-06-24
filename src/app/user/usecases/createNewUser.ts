import User from '../entity/props/User';
import IUserRepository from '../repository/IUserRepository';
import validateEmail from '../../shared/validateEmail';

export default class CreateNewUser {
  private repository: IUserRepository;

  constructor(repository: IUserRepository) {
    this.repository = repository;
  }

  public async execute(user: User) {
    const isValidEmail = validateEmail(user.email);

    if (!isValidEmail) {
      throw new Error('E-mail inválido. Tente novamente com um e-mail válido.');
    }

    const searchUserByEmail = await this.repository.findUserByEmail(user.email);

    if (searchUserByEmail) {
      throw new Error('Usuário já cadastrado. Tente recuperar a senha.');
    }

    return await this.repository.saveUser(user);
  }
}
