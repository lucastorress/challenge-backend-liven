import { Request, Response } from 'express';
import { UpdateUserUseCase } from './UpdateUserUseCase';

export default class UpdateUserController {
  constructor(private useCase: UpdateUserUseCase) {}

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
