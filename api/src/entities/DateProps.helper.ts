import { CreateDateColumn, UpdateDateColumn } from 'typeorm';

class DateProps {
  @CreateDateColumn({
    name: 'created_at',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
  })
  updatedAt: Date;
}

export default DateProps;
