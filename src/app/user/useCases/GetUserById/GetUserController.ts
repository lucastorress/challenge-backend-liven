import { Request, Response } from 'express';
import { GetUserUseCase } from './GetUserUseCase';

export default class GetUserController {
  constructor(private useCase: GetUserUseCase) {}

  public async handle(request: Request, response: Response) {
    const { id } = request.params;

    try {
      const user = await this.useCase.execute({
        id,
      });

      if (!user) {
        return response.status(400).json('Usuário não encontrado.');
      }

      return response.status(200).json(user.valueOf());
    } catch (error) {
      response.status(400).json(error.message || 'Internal Server Error');
    }
  }
}
