import Pais from '../../entities/Pais';
import ICreatePaisDTO from '../../dtos/ICreatePaisDTO';

export default interface IPaissRepository {
  create(data: ICreatePaisDTO): Promise<Pais>;
  save(pais: Pais): Promise<Pais>;
  find(): Promise<Pais[]>;
  findOne(codigo: number): Promise<Pais | undefined>;
}
