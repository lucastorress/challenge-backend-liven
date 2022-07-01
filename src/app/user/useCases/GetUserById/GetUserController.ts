import { Request, Response } from 'express';
import { GetUserWithAddressesUseCase } from './GetUserWithAddressesUseCase';

export default class GetUserController {
  constructor(private useCase: GetUserWithAddressesUseCase) {}

  public async handle(request: Request, response: Response) {
    const userId = request.userId;

    try {
      const user = await this.useCase.execute({
        id: userId,
      });

      return response.status(200).json(user);
    } catch (error) {
      response.status(400).json(error.message || 'Internal Server Error');
    }
  }
}
