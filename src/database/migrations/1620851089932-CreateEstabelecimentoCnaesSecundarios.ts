import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CreateEstabelecimentoCnaesSecundarios1620851089932
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'estabelecimento_cnaes',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'estabelecimento_id',
            type: 'integer',
          },
          {
            name: 'cnae_id',
            type: 'integer',
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'estabelecimento_cnaes',
      new TableForeignKey({
        name: 'estabelecimento_cnaes',
        columnNames: ['estabelecimento_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'estabelecimentos',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'estabelecimento_cnaes',
      new TableForeignKey({
        name: 'cnaes_estabelecimento',
        columnNames: ['cnae_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'cnaes',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      'estabelecimento_cnaes',
      'estabelecimento_cnaes',
    );

    await queryRunner.dropForeignKey(
      'estabelecimento_cnaes',
      'cnaes_estabelecimento',
    );

    await queryRunner.dropTable('estabelecimento_cnaes');
  }
}
