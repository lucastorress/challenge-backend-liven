import { Request, Response } from 'express';
import { DeleteUserUseCase } from './DeleteUserUseCase';

export default class DeleteUserController {
  constructor(private useCase: DeleteUserUseCase) {}

  public async handle(request: Request, response: Response) {
    let id;

    if (request.query && request.query.id) {
      id = request.query.id;
    }

    try {
      const userWasDeleted = await this.useCase.execute({
        id,
      });

      return response.status(200).json(userWasDeleted);
    } catch (error) {
      response.status(400).json(error.message || 'Internal Server Error');
    }
  }
}
