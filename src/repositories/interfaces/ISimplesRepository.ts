import Simples from '../../entities/Simples';
import ICreateSimplesDTO from '../../dtos/ICreateSimplesDTO';

export default interface ISimplessRepository {
  create(data: ICreateSimplesDTO): Promise<Simples>;
  save(simples: Simples): Promise<Simples>;
  find(): Promise<Simples[]>;
  findOne(cnpj: string): Promise<Simples | undefined>;
}
