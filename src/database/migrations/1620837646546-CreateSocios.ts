import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CreateSocios1620837646546 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'socios',
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
            name: 'identificador_socio',
            type: 'varchar',
          },
          {
            name: 'nome_razao_social',
            type: 'varchar',
          },
          {
            name: 'cpf_cnpj',
            type: 'varchar',
          },
          {
            name: 'qualificacao_socio_id',
            type: 'integer',
          },
          {
            name: 'data_entrada_sociedade',
            type: 'date',
          },
          {
            name: 'pais_id',
            type: 'integer',
          },
          {
            name: 'cpf_representante_legal',
            type: 'varchar',
          },
          {
            name: 'nome_representante_legal',
            type: 'varchar',
          },
          {
            name: 'qualificacao_respresentante_legal_id',
            type: 'integer',
          },
          {
            name: 'faixa_etaria',
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
      'socios',
      new TableForeignKey({
        name: 'socios_empresa',
        columnNames: ['empresa_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'empresas',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'socios',
      new TableForeignKey({
        name: 'socios_qualificacao',
        columnNames: ['qualificacao_socio_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'qualificacoes_socios',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'socios',
      new TableForeignKey({
        name: 'socios_qualificacao_representante',
        columnNames: ['qualificacao_respresentante_legal_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'qualificacoes_socios',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('socios');
  }
}
