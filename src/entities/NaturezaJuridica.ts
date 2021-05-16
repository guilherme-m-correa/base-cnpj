import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('naturezas_juridicas')
class NaturezaJuridica {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  codigo: number;

  @Column()
  descricao: string;
}

export default NaturezaJuridica;
