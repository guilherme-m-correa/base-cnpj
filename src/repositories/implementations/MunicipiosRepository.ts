import { getRepository, Repository } from 'typeorm';

import IMunicipiosRepository from '../interfaces/IMunicipiosRepository';
import Municipio from '../../entities/Municipio';
import ICreateMunicipioDTO from '../../dtos/ICreateMunicipioDTO';

class MunicipiosRepository implements IMunicipiosRepository {
  private ormRepository: Repository<Municipio>;

  constructor() {
    this.ormRepository = getRepository(Municipio);
  }

  public async create(data: ICreateMunicipioDTO): Promise<Municipio> {
    const municipio = this.ormRepository.create(data);

    await this.ormRepository.save(municipio);

    return municipio;
  }

  public async find(): Promise<Municipio[]> {
    return this.ormRepository.find();
  }

  public async findOne(codigo: number): Promise<Municipio | undefined> {
    return this.ormRepository.findOne({ where: { codigo } });
  }

  public async save(municipio: Municipio): Promise<Municipio> {
    return this.ormRepository.save(municipio);
  }
}

export default MunicipiosRepository;
