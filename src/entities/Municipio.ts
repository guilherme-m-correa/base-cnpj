import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('municipios')
class Municipio {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  codigo: number;

  @Column()
  descricao: string;
}

export default Municipio;
