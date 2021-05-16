import { getRepository, Repository } from 'typeorm';

import IEstabelecimentoCnaeSecundariosRepository from '../interfaces/IEstabelecimentoCnaeSecundariosRepository';
import EstabelecimentoCnaeSecundario from '../../entities/EstabelecimentoCnaeSecundario';
import ICreateEstabelecimentoCnaeSecundarioDTO from '../../dtos/ICreateEstabelecimentoCnaeSecundarioDTO';

class EstabelecimentoCnaeSecundariosRepository
  implements IEstabelecimentoCnaeSecundariosRepository
{
  private ormRepository: Repository<EstabelecimentoCnaeSecundario>;

  constructor() {
    this.ormRepository = getRepository(EstabelecimentoCnaeSecundario);
  }

  public async create(
    data: ICreateEstabelecimentoCnaeSecundarioDTO,
  ): Promise<EstabelecimentoCnaeSecundario> {
    const estabelecimentoCnaeSecundario = this.ormRepository.create(data);

    await this.ormRepository.save(estabelecimentoCnaeSecundario);

    return estabelecimentoCnaeSecundario;
  }

  public async find(): Promise<EstabelecimentoCnaeSecundario[]> {
    return this.ormRepository.find();
  }

  public async findOne(
    estabelecimentoId: number,
    cnaeId: number,
  ): Promise<EstabelecimentoCnaeSecundario | undefined> {
    return this.ormRepository.findOne({
      where: {
        estabelecimento: { id: estabelecimentoId },
        cnae: { id: cnaeId },
      },
    });
  }

  public async save(
    estabelecimentoCnaeSecundario: EstabelecimentoCnaeSecundario,
  ): Promise<EstabelecimentoCnaeSecundario> {
    return this.ormRepository.save(estabelecimentoCnaeSecundario);
  }
}

export default EstabelecimentoCnaeSecundariosRepository;
