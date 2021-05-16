import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import Estabelecimento from './Estabelecimento';
import NaturezaJuridica from './NaturezaJuridica';

import QualificacaoSocio from './QualificacaoSocio';
import Simples from './Simples';
import Socio from './Socio';

@Entity('empresas')
class Empresa {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @OneToMany(
    () => Estabelecimento,
    estabelecimento => estabelecimento.empresa,
    { eager: true },
  )
  estabelecimentos: Estabelecimento[];

  @OneToMany(() => Socio, socio => socio.empresa, { eager: true })
  socios: Socio[];

  @OneToOne(() => Simples, simples => simples.empresa, { eager: true })
  simples: Simples;

  @Column()
  cnpj: string;

  @Column()
  razao_social: string;

  @Column()
  natureza_juridica_id: number;

  @OneToOne(() => NaturezaJuridica, { eager: true })
  @JoinColumn({ name: 'natureza_juridica_id' })
  natureza_juridica: NaturezaJuridica;

  @Column()
  qualificacao_do_responsavel_id: number;

  @OneToOne(() => QualificacaoSocio, { eager: true })
  @JoinColumn({ name: 'qualificacao_do_responsavel_id' })
  qualificacao_do_responsavel: QualificacaoSocio;

  @Column()
  capital_social: number;

  @Column()
  porte: string;

  @Column()
  ente_federativo_responsavel: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Empresa;
