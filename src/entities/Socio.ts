import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import Empresa from './Empresa';
import Pais from './Pais';
import QualificacaoSocio from './QualificacaoSocio';

@Entity('socios')
class Socio {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  empresa_id: number;

  @OneToOne(() => Empresa)
  @JoinColumn({ name: 'empresa_id' })
  empresa: Empresa;

  @Column()
  identificador_socio: string;

  @Column()
  nome_razao_social: string;

  @Column()
  cpf_cnpj: string;

  @Column()
  qualificacao_socio_id: number;

  @OneToOne(() => QualificacaoSocio, { eager: true })
  @JoinColumn({ name: 'qualificacao_socio_id' })
  qualificacao_socio: QualificacaoSocio;

  @Column()
  data_entrada_sociedade: Date;

  @Column()
  pais_id: number;

  @OneToOne(() => Pais, { eager: true })
  @JoinColumn({ name: 'pais_id' })
  pais: Pais;

  @Column()
  cpf_representante_legal: string;

  @Column()
  nome_representante_legal: string;

  @Column()
  qualificacao_respresentante_legal_id: number;

  @OneToOne(() => QualificacaoSocio, { eager: true })
  @JoinColumn({ name: 'qualificacao_respresentante_legal_id' })
  qualificacao_respresentante_legal: QualificacaoSocio;

  @Column()
  faixa_etaria: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Socio;
