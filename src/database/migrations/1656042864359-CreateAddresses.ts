import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateAddresses1656042864359 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'addresses',
        columns: [
          { name: 'id', type: 'varchar', isPrimary: true },
          { name: 'zipCode', type: 'varchar', isNullable: false },
          { name: 'address', type: 'varchar', isNullable: false },
          { name: 'complement', type: 'varchar', isNullable: false },
          { name: 'state', type: 'varchar', isNullable: false },
          { name: 'city', type: 'varchar', isNullable: false },
          { name: 'country', type: 'varchar', length: '3', isNullable: false },
          { name: 'user_id', type: 'varchar' },
        ],
        foreignKeys: [
          {
            name: 'fk_user_addresses',
            columnNames: ['user_id'],
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('addresses');
  }
}
