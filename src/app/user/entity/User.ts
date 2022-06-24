import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { Address } from '../../address/entity/Address';
import { v4 as uuid } from 'uuid';

@Entity('users')
export class User {
  @PrimaryColumn('uuid')
  id?: string;

  @Column({ type: 'varchar', nullable: false })
  name: string;

  @Column({ type: 'varchar', unique: true })
  email: string;

  @Column({ type: 'varchar', nullable: false })
  password: string;

  @Column({ type: 'date', nullable: false })
  birthday: Date;

  @OneToMany(() => Address, (address) => address.user_id)
  addresses?: Address[];

  constructor() {
    if (!this.id) this.id = uuid();
  }
}
