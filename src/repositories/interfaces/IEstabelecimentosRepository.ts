import Estabelecimento from '../../entities/Estabelecimento';
import ICreateEstabelecimentoDTO from '../../dtos/ICreateEstabelecimentoDTO';

export default interface IEstabelecimentosRepository {
  create(data: ICreateEstabelecimentoDTO): Promise<Estabelecimento>;
  save(estabelecimento: Estabelecimento): Promise<Estabelecimento>;
  find(): Promise<Estabelecimento[]>;
  findOne(cnpj: string): Promise<Estabelecimento | undefined>;
}
