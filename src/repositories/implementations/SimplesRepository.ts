import { getRepository, Repository } from 'typeorm';

import ISimplesRepository from '../interfaces/ISimplesRepository';
import Simples from '../../entities/Simples';
import ICreateSimplesDTO from '../../dtos/ICreateSimplesDTO';

class SimplesRepository implements ISimplesRepository {
  private ormRepository: Repository<Simples>;

  constructor() {
    this.ormRepository = getRepository(Simples);
  }

  public async create(data: ICreateSimplesDTO): Promise<Simples> {
    const simples = this.ormRepository.create(data);

    await this.ormRepository.save(simples);

    return simples;
  }

  public async find(): Promise<Simples[]> {
    return this.ormRepository.find();
  }

  public async findOne(cnpj: string): Promise<Simples | undefined> {
    return this.ormRepository.findOne({ where: { cnpj } });
  }

  public async save(simples: Simples): Promise<Simples> {
    return this.ormRepository.save(simples);
  }
}

export default SimplesRepository;
