import { getRepository, Repository } from 'typeorm';

import IEstabelecimentosRepository from '../interfaces/IEstabelecimentosRepository';
import Estabelecimento from '../../entities/Estabelecimento';
import ICreateEstabelecimentoDTO from '../../dtos/ICreateEstabelecimentoDTO';

class EstabelecimentosRepository implements IEstabelecimentosRepository {
  private ormRepository: Repository<Estabelecimento>;

  constructor() {
    this.ormRepository = getRepository(Estabelecimento);
  }

  public async create(
    data: ICreateEstabelecimentoDTO,
  ): Promise<Estabelecimento> {
    const estabelecimento = this.ormRepository.create(data);

    await this.ormRepository.save(estabelecimento);

    return estabelecimento;
  }

  public async find(): Promise<Estabelecimento[]> {
    return this.ormRepository.find();
  }

  public async findOne(cnpj: string): Promise<Estabelecimento | undefined> {
    return this.ormRepository.findOne({ where: { cnpj } });
  }

  public async save(
    estabelecimento: Estabelecimento,
  ): Promise<Estabelecimento> {
    return this.ormRepository.save(estabelecimento);
  }
}

export default EstabelecimentosRepository;
