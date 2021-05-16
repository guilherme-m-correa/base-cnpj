import EstabelecimentoCnaeSecundario from '../../entities/EstabelecimentoCnaeSecundario';
import ICreateEstabelecimentoCnaeSecundarioDTO from '../../dtos/ICreateEstabelecimentoCnaeSecundarioDTO';

export default interface IEstabelecimentoCnaeSecundariosRepository {
  create(
    data: ICreateEstabelecimentoCnaeSecundarioDTO,
  ): Promise<EstabelecimentoCnaeSecundario>;
  save(
    estabelecimentoCnaeSecundario: EstabelecimentoCnaeSecundario,
  ): Promise<EstabelecimentoCnaeSecundario>;
  find(): Promise<EstabelecimentoCnaeSecundario[]>;
  findOne(
    estabelecimentoId: number,
    cnaeId: number,
  ): Promise<EstabelecimentoCnaeSecundario | undefined>;
}
