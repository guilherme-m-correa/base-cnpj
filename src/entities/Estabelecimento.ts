import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  OneToMany,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import Empresa from './Empresa';
import Pais from './Pais';
import Cnae from './Cnae';
import Municipio from './Municipio';
import EstabelecimentoCnaeSecundario from './EstabelecimentoCnaeSecundario';

@Entity('estabelecimentos')
class Estabelecimento {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  empresa_id: string;

  @OneToOne(() => Empresa)
  @JoinColumn({ name: 'empresa_id' })
  empresa: Empresa;

  @Column()
  cnpj: string;

  @Column()
  identificador_matriz_filial: string;

  @Column()
  nome_fantasia: string;

  @Column()
  situacao_cadastral: string;

  @Column()
  data_situacao_cadastral: Date;

  @Column()
  motivo_situacao_cadastral: string;

  @Column()
  nome_cidade_exterior: string;

  @Column()
  pais_id: number;

  @OneToOne(() => Pais, { eager: true })
  @JoinColumn({ name: 'pais_id' })
  pais: Pais;

  @Column()
  data_inicio_atividade: Date;

  @Column()
  cnae_fiscal_principal_id: number;

  @OneToOne(() => Cnae, { eager: true })
  @JoinColumn({ name: 'cnae_fiscal_principal_id' })
  cnae_fiscal_principal: Cnae;

  @OneToMany(
    () => EstabelecimentoCnaeSecundario,
    estabelecimentoCnaeSecundario =>
      estabelecimentoCnaeSecundario.estabelecimento,
    { eager: true },
  )
  cnaes_secundarios: EstabelecimentoCnaeSecundario[];

  @Column()
  tipo_logradouro: string;

  @Column()
  logradouro: string;

  @Column()
  numero: string;

  @Column()
  complemento: string;

  @Column()
  bairro: string;

  @Column()
  cep: string;

  @Column()
  uf: string;

  @Column()
  municipio_id: number;

  @OneToOne(() => Municipio, { eager: true })
  @JoinColumn({ name: 'municipio_id' })
  municipio: Municipio;

  @Column()
  ddd_1: string;

  @Column()
  telefone_1: string;

  @Column()
  ddd_2: string;

  @Column()
  telefone_2: string;

  @Column()
  ddd_fax: string;

  @Column()
  fax: string;

  @Column()
  email: string;

  @Column()
  situacao_especial: string;

  @Column()
  data_situacao_especial: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Estabelecimento;
