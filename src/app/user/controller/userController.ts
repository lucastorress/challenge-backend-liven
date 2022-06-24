import { Request, Response } from 'express';
import IUserRepository from '../repository/IUserRepository';
import UserRepository from '../repository/UserRepository';
import CreateNewUser from '../usecases/createNewUser';
import User from '../entity/props/User';
import database from '../../../database/connections/PostgreSQL';

export default class UserController {
  private userRepository: IUserRepository;

  constructor() {
    this.userRepository = new UserRepository(database);
  }

  public async store(req: Request, res: Response) {
    console.log(req);
    const createNewUser = new CreateNewUser(this.userRepository);
    const newUser = new User(req.body);

    try {
      await createNewUser.execute(newUser);
    } catch (error) {
      res.status(400).send(error.message || 'Internal Server Error');
    }
  }
}
