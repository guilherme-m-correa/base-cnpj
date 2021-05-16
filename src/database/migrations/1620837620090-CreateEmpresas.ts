import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CreateEmpresas1620837620090 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'empresas',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'cnpj',
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'razao_social',
            type: 'varchar',
          },
          {
            name: 'natureza_juridica_id',
            type: 'integer',
          },
          {
            name: 'qualificacao_do_responsavel_id',
            type: 'integer',
          },
          {
            name: 'capital_social',
            type: 'bigint',
          },
          {
            name: 'porte',
            type: 'varchar',
          },
          {
            name: 'ente_federativo_responsavel',
            type: 'varchar',
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
      'empresas',
      new TableForeignKey({
        name: 'empresa_natureza_juridica',
        columnNames: ['natureza_juridica_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'naturezas_juridicas',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'empresas',
      new TableForeignKey({
        name: 'empresa_qualificacao_do_responsavel',
        columnNames: ['qualificacao_do_responsavel_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'qualificacoes_socios',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('empresas');
  }
}
