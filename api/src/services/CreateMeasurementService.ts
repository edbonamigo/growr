import { getRepository } from 'typeorm';

import Sensor from '../entities/Sensor';
import Measurement from '../entities/Measurement';

interface Request {
  sensor: string;
  value: number;
}

class CreateMeasurementService {
  public async execute({ sensor, value }: Request): Promise<Measurement> {
    const sensorRepository = getRepository(Sensor);

    const findSensor = await sensorRepository.findOne({
      where: { id: sensor },
    });

    if (!findSensor) {
      throw Error('Sensor not finded!');
    }

    const measurementRepository = getRepository(Measurement);

    const measurament = measurementRepository.create({
      sensor: findSensor,
      value: value,
    });

    await measurementRepository.save(measurament);

    return measurament;
  }
}

export default CreateMeasurementService;
