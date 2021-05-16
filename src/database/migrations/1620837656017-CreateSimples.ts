import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CreateSimples1620837656017 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'simples',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'empresa_id',
            type: 'integer',
          },
          {
            name: 'opcao_simples',
            type: 'varchar',
          },
          {
            name: 'data_opcao_simples',
            type: 'date',
            isNullable: true,
          },
          {
            name: 'data_exclusao_simples',
            type: 'date',
            isNullable: true,
          },
          {
            name: 'opcao_mei',
            type: 'varchar',
          },
          {
            name: 'data_opcao_mei',
            type: 'date',
            isNullable: true,
          },
          {
            name: 'data_exclusao_mei',
            type: 'date',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'simples',
      new TableForeignKey({
        name: 'simples_empresa',
        columnNames: ['empresa_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'empresas',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('socios');
  }
}
