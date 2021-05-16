import {
  Entity,
  Column,
  JoinColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';
import Cnae from './Cnae';
import Estabelecimento from './Estabelecimento';

@Entity('estabelecimento_cnaes')
class EstabelecimentoCnaeSecundario {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @ManyToOne(() => Cnae, cnae => cnae.estabelecimento_cnaes, { eager: true })
  @JoinColumn({ name: 'cnae_id' })
  cnae: Cnae;

  @ManyToOne(
    () => Estabelecimento,
    estabelecimento => estabelecimento.cnaes_secundarios,
  )
  @JoinColumn({ name: 'estabelecimento_id' })
  estabelecimento: Estabelecimento;

  @Column()
  cnae_id: number;

  @Column()
  estabelecimento_id: number;
}

export default EstabelecimentoCnaeSecundario;
