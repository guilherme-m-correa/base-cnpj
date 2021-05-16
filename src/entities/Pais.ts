import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('paises')
class Pais {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  codigo: number;

  @Column()
  descricao: string;
}

export default Pais;
