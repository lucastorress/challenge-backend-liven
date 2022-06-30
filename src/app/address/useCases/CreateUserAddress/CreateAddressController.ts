import { Request, Response } from 'express';
import { CreateAddressUseCase } from './CreateAddressUseCase';

export default class CreateAddressController {
  constructor(private useCase: CreateAddressUseCase) {}

  public async handle(request: Request, response: Response) {
    const userId = request.userId;
    const { zipCode, address, complement, state, city, country } = request.body;

    try {
      const addressCreated = await this.useCase.execute({
        userId,
        zipCode,
        address,
        complement,
        state,
        city,
        country,
      });

      return response.status(201).json(addressCreated);
    } catch (error) {
      response.status(400).json(error.message || 'Internal Server Error');
    }
  }
}
