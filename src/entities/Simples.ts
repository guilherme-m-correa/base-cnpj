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

@Entity('simples')
class Simples {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  empresa_id: string;

  @OneToOne(() => Empresa)
  @JoinColumn({ name: 'empresa_id' })
  empresa: Empresa;

  @Column()
  opcao_simples: string;

  @Column()
  data_opcao_simples: Date;

  @Column()
  data_exclusao_simples: Date;

  @Column()
  opcao_mei: string;

  @Column()
  data_opcao_mei: Date;

  @Column()
  data_exclusao_mei: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Simples;
