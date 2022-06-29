import IUsersRepository from '../../repositories/IUsersRepository';
import { IDeleteUserDTO } from './DeleteUserDTO';

export class DeleteUserUseCase {
  constructor(private repository: IUsersRepository) {}

  public async execute(props: IDeleteUserDTO) {
    const user = await this.repository.remove(props.id);
    return user;
  }
}
