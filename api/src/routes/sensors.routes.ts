import { Router } from 'express';
import { getRepository } from 'typeorm';

import Sensor from '../entities/Sensor';
import CreateSensorService from '../services/CreateSensorService';

const sensorsRouter = Router();

sensorsRouter.get('/', async (request, response) => {
  const sensorsRepository = getRepository(Sensor);

  const sensors = await sensorsRepository.find();

  return response.json(sensors);
});

sensorsRouter.post('/', async (request, response) => {
  const { name, unity } = request.body;

  const createSensor = new CreateSensorService();

  const sensor = await createSensor.execute({ name, unity });

  return response.json({ sensor });
});

export default sensorsRouter;
