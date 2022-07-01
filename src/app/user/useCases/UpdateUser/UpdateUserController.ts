import { Request, Response } from 'express';
import { UpdateUserUseCase } from './UpdateUserUseCase';

export default class UpdateUserController {
  constructor(private useCase: UpdateUserUseCase) {}

  public async handle(request: Request, response: Response) {
    const userId = request.userId;
    const { name, email, password, birthday } = request.body;

    try {
      const user = await this.useCase.execute({
        userId,
        body: {
          name,
          email,
          password,
          birthday,
        },
      });

      return response.status(201).json(user);
    } catch (error) {
      response.status(400).json(error.message || 'Internal Server Error');
    }
  }
}
