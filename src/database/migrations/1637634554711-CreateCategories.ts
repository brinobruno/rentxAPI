import {MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateCategories1637634554711 implements MigrationInterface {

    //subir migration
    //yarn typeorm migration:run
    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table(
          {
            name: 'categories',
            columns: [
              {
                name: 'id',
                type: 'uuid',
                isPrimary: true,
              },
              {
                name: 'name',
                type: 'varchar',
              },
              {
                name: 'description',
                type: 'varchar',
              },
              {
                name: 'createdAt',
                type: 'timestamp',
                default: 'now()',
              },
            ],  
          }
        )
      )
    }

    //desfazer migration
    //yarn typeorm migration:revert
    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('categories')
    }

}
