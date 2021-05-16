import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CreateEstabelecimentos1620837636523
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'estabelecimentos',
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
            name: 'cnpj',
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'identificador_matriz_filial',
            type: 'varchar',
          },
          {
            name: 'nome_fantasia',
            type: 'varchar',
          },
          {
            name: 'situacao_cadastral',
            type: 'varchar',
          },
          {
            name: 'data_situacao_cadastral',
            type: 'date',
            isNullable: true,
          },
          {
            name: 'motivo_situacao_cadastral',
            type: 'varchar',
          },
          {
            name: 'nome_cidade_exterior',
            type: 'varchar',
          },
          {
            name: 'pais_id',
            type: 'integer',
          },
          {
            name: 'data_inicio_atividade',
            type: 'date',
            isNullable: true,
          },
          {
            name: 'cnae_fiscal_principal_id',
            type: 'integer',
          },
          {
            name: 'tipo_logradouro',
            type: 'varchar',
          },
          {
            name: 'logradouro',
            type: 'varchar',
          },
          {
            name: 'numero',
            type: 'varchar',
          },
          {
            name: 'complemento',
            type: 'varchar',
          },
          {
            name: 'bairro',
            type: 'varchar',
          },
          {
            name: 'cep',
            type: 'varchar',
          },
          {
            name: 'uf',
            type: 'varchar',
          },
          {
            name: 'municipio_id',
            type: 'integer',
          },
          {
            name: 'ddd_1',
            type: 'varchar',
          },
          {
            name: 'telefone_1',
            type: 'varchar',
          },
          {
            name: 'ddd_2',
            type: 'varchar',
          },
          {
            name: 'telefone_2',
            type: 'varchar',
          },
          {
            name: 'ddd_fax',
            type: 'varchar',
          },
          {
            name: 'fax',
            type: 'varchar',
          },
          {
            name: 'email',
            type: 'varchar',
          },
          {
            name: 'situacao_especial',
            type: 'varchar',
          },
          {
            name: 'data_situacao_especial',
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
      'estabelecimentos',
      new TableForeignKey({
        name: 'estabelecimento_pais',
        columnNames: ['pais_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'paises',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'estabelecimentos',
      new TableForeignKey({
        name: 'estabelecimento_municipios',
        columnNames: ['municipio_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'municipios',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'estabelecimentos',
      new TableForeignKey({
        name: 'estabelecimento_empresa',
        columnNames: ['empresa_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'empresas',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'estabelecimentos',
      new TableForeignKey({
        name: 'estabelecimento_cnae',
        columnNames: ['cnae_fiscal_principal_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'cnaes',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('estabelecimentos');
  }
}
