import IUsersRepository from '../../repositories/IUsersRepository';
import { IGetUserDTO } from './GetUserDTO';

export class GetUserUseCase {
  constructor(private repository: IUsersRepository) {}

  public async execute(props: IGetUserDTO) {
    const user = await this.repository.findById(props.id);
    return user;
  }
}
