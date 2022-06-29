import { Request, Response } from 'express';
import { CreateUserUseCase } from './CreateUserUseCase';

export default class CreateUserController {
  constructor(private useCase: CreateUserUseCase) {}

  public async handle(request: Request, response: Response) {
    const { name, email, password, birthday } = request.body;

    try {
      const user = await this.useCase.execute({
        name,
        email,
        password,
        birthday,
      });

      return response.status(201).json(user.valueOf());
    } catch (error) {
      response.status(400).json(error.message || 'Internal Server Error');
    }
  }
}
