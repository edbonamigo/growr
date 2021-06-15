import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import DateProps from './DateProps.helper';
import Sensor from './Sensor';

@Entity('measurement')
class Measurement extends DateProps {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  values: number;

  @ManyToOne(() => Sensor, (sensor) => sensor.measurements)
  sensor: Sensor;
}

export default Measurement;
