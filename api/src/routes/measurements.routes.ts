import { Router } from 'express';
import { getRepository } from 'typeorm';

import Measurement from '../entities/Measurement';
import CreateMeasurementService from '../services/CreateMeasurementService';

const measurementsRouter = Router();

measurementsRouter.get('/', async (request, response) => {
  const measurementsRepository = getRepository(Measurement);

  const measurements = await measurementsRepository.find();

  return response.json(measurements);
});

measurementsRouter.post('/', async (request, response) => {
  const sensorsValues = request.body;
  const measuraments: any = [];

  const createMeasurement = new CreateMeasurementService();

  sensorsValues.forEach(async (sensorValue: any) => {
    const { sensor, value } = sensorValue;

    const measurament = await createMeasurement.execute({
      sensor,
      value,
    });

    measuraments.push(measurament);
  });

  return response.json(measuraments);
});

export default measurementsRouter;
