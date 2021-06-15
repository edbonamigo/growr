import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import DateProps from './DateProps.helper';
import Measurement from './Measurements';

@Entity('sensors')
class Sensor extends DateProps {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  unity: string;

  @OneToMany(() => Measurement, (measurement) => measurement.sensor)
  measurements: Measurement[];
}

export default Sensor;
