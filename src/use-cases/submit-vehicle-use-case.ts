import { VehiclesRepository } from "../repositories/vehicles-repository";

interface SubmitVehicleUseCaseRequest {
  model: string;
  plateNumber: string;
  createdAt: Date;
}

export class SubmitVehicleUseCase {

  constructor(
    private vehiclesRepository: VehiclesRepository
  ) {}

  async execute(request: SubmitVehicleUseCaseRequest) {
    const { model, plateNumber, createdAt } = request;

    if (!model) {
      throw new Error('Model is required.')
    }

    if (!plateNumber) {
      throw new Error('Plate Number is required.')
    }

    await this.vehiclesRepository.create({
      model,
      plateNumber,
      createdAt
    })
  }
}