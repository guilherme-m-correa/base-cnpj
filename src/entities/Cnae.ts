import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import EstabelecimentoCnaeSecundario from './EstabelecimentoCnaeSecundario';

@Entity('cnaes')
class Cnae {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  codigo: number;

  @Column()
  descricao: string;

  @OneToMany(
    () => EstabelecimentoCnaeSecundario,
    estabelecimentoCnaeSecundario =>
      estabelecimentoCnaeSecundario.estabelecimento,
  )
  estabelecimento_cnaes: EstabelecimentoCnaeSecundario[];
}

export default Cnae;
