import { getRepository } from 'typeorm';

import Sensor from '../entities/Sensor';

interface Request {
  name: string;
  unity: string;
}

class CreateSensorService {
  public async execute({ name, unity }: Request): Promise<Sensor> {
    const sensorsRepository = getRepository(Sensor);

    const findSensorSameName = await sensorsRepository.findOne({
      where: { name },
    });

    if (findSensorSameName) {
      throw Error('This sensor name is already created');
    }

    const sensor = sensorsRepository.create({
      name,
      unity,
    });

    await sensorsRepository.save(sensor);

    return sensor;
  }
}

export default CreateSensorService;
