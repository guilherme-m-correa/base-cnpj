import { getRepository, Repository } from 'typeorm';

import IPaisesRepository from '../interfaces/IPaisesRepository';
import Pais from '../../entities/Pais';
import ICreatePaisDTO from '../../dtos/ICreatePaisDTO';

class PaissRepository implements IPaisesRepository {
  private ormRepository: Repository<Pais>;

  constructor() {
    this.ormRepository = getRepository(Pais);
  }

  public async create(data: ICreatePaisDTO): Promise<Pais> {
    const pais = this.ormRepository.create(data);

    await this.ormRepository.save(pais);

    return pais;
  }

  public async find(): Promise<Pais[]> {
    return this.ormRepository.find();
  }

  public async findOne(codigo: number): Promise<Pais | undefined> {
    return this.ormRepository.findOne({ where: { codigo } });
  }

  public async save(pais: Pais): Promise<Pais> {
    return this.ormRepository.save(pais);
  }
}

export default PaissRepository;
