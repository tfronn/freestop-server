import { prisma } from '../../prisma';
import { VehicleCreateData, VehiclesRepository } from '../vehicles-repository';

export class PrismaVehiclesRepository implements VehiclesRepository {
  async create({ model, plateNumber, createdAt }: VehicleCreateData) {
    await prisma.vehicle.create({ 
      data: {
        model,
        plateNumber,
        createdAt
      }
    })
  }
}