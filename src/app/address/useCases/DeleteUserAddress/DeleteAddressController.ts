import { Request, Response } from 'express';
import { DeleteAddressUseCase } from './DeleteAddressUseCase';

export default class DeleteAddressController {
  constructor(private useCase: DeleteAddressUseCase) {}

  public async handle(request: Request, response: Response) {
    const userId = request.userId;

    const { id } = request.params;

    try {
      const address = await this.useCase.execute({
        id,
        userId,
      });

      if (!address) {
        return response.status(400).json('Endereço não encontrado.');
      }

      return response.status(200).json(address);
    } catch (error) {
      response.status(400).json(error.message || 'Internal Server Error');
    }
  }
}
