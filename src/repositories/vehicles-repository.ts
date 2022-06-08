export interface VehicleCreateData {
  model: string;
  plateNumber: string;
  createdAt: Date;
}

export interface VehiclesRepository {
  create: (data: VehicleCreateData) => Promise<void>;
}