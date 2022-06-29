import { Entity, PrimaryColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../../user/entities/User';
import { v4 as uuid } from 'uuid';

@Entity('addresses')
export class Address {
  @PrimaryColumn('uuid')
  id: string;

  @Column({ type: 'varchar', nullable: false })
  zipCode: string;

  @Column({ type: 'varchar', nullable: false })
  address: string;

  @Column({ type: 'varchar', nullable: false })
  complement: string;

  @Column({ type: 'varchar', nullable: false })
  state: string;

  @Column({ type: 'varchar', nullable: false })
  city: string;

  @Column({ type: 'varchar', length: 3, nullable: false })
  country: string;

  @ManyToOne(() => User, (user) => user.addresses)
  user_id: User;

  constructor() {
    if (!this.id) this.id = uuid();
  }
}
