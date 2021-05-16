import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('qualificacoes_socios')
class QualificacaoSocio {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  codigo: number;

  @Column()
  descricao: string;
}

export default QualificacaoSocio;
