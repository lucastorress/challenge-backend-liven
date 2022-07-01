import { Request, Response } from 'express';
import { DeleteUserUseCase } from './DeleteUserUseCase';

export default class DeleteUserController {
  constructor(private useCase: DeleteUserUseCase) {}

  public async handle(request: Request, response: Response) {
    const userId = request.userId;

    try {
      const userWasDeleted = await this.useCase.execute({
        id: userId,
      });

      if (!userWasDeleted) {
        return response.status(400).json('Usuário não encontrado.');
      }

      return response.status(200).json(userWasDeleted);
    } catch (error) {
      response.status(400).json(error.message || 'Internal Server Error');
    }
  }
}
