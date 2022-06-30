import { Request, Response } from 'express';
import { GetAddressUseCase } from './GetAddressUseCase';

export default class GetAddressController {
  constructor(private useCase: GetAddressUseCase) {}

  public async handle(request: Request, response: Response) {
    const userId = request.userId;

    let country;

    if (request.query && request.query.country) {
      country = request.query.country;
    }

    try {
      const addresses = await this.useCase.execute({
        userId,
        country,
      });

      if (!addresses) {
        return response.status(400).json('Endereço não encontrado.');
      }

      return response.status(200).json(addresses);
    } catch (error) {
      response.status(400).json(error.message || 'Internal Server Error');
    }
  }
}
