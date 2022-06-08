import { prisma } from './prisma'
import express from 'express';
import { PrismaVehiclesRepository } from './repositories/prisma/prisma-vehicles-repository';
import { SubmitVehicleUseCase } from './use-cases/submit-vehicle-use-case'

export const routes = express.Router()

routes.get('/vehicles', async (req, res) => {
  res.header("Access-Control-Allow-Origin", "https://freestop-front.vercel.app/")
  const transactions = await prisma.vehicle.findMany();
  res.json(transactions)
})

routes.post('/vehicles', async (req, res) => {
  res.header("Access-Control-Allow-Origin", "https://freestop-front.vercel.app/")
  const { model, plateNumber, createdAt } = req.body

  try {
  const prismaVehiclesRepository = new PrismaVehiclesRepository()
  const submitVehicleUseCase = new SubmitVehicleUseCase(prismaVehiclesRepository)
  
  await submitVehicleUseCase.execute({
    model,
    plateNumber,
    createdAt
  })

    const vehicles = await prisma.vehicle.findMany();
    return res.status(201).json(vehicles).send();
  } catch(err) {
    console.error(err)
    return res.status(500).send()
  }
})

routes.delete('/vehicles/plateNumber', async (req, res) => {
  res.header("Access-Control-Allow-Origin", "https://freestop-front.vercel.app/")
  const { plateNumber } = req.body
    
  try {
    console.log(plateNumber)
  const removedVehicle = await prisma.vehicle.delete({
    where: {
      plateNumber
    }
  })
  const vehicles = await prisma.vehicle.findMany();
  return res.status(201).json({removedVehicle, vehicles}).send();
  } catch(err) {
  console.log(err)
}
})

