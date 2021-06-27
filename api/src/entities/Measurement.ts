import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import DateProps from './DateProps.helper';
import Sensor from './Sensor';

@Entity('measurement')
class Measurement extends DateProps {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  value: number;

  @ManyToOne(() => Sensor, (sensor) => sensor.measurements, {
    eager: true,
  })
  sensor: Sensor;
}

export default Measurement;
