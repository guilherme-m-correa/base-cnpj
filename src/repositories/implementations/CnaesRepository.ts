import { getRepository, In, Repository } from 'typeorm';

import ICnaesRepository from '../interfaces/ICnaesRepository';
import Cnae from '../../entities/Cnae';
import ICreateCnaeDTO from '../../dtos/ICreateCnaeDTO';

class CnaesRepository implements ICnaesRepository {
  private ormRepository: Repository<Cnae>;

  constructor() {
    this.ormRepository = getRepository(Cnae);
  }

  public async create(data: ICreateCnaeDTO): Promise<Cnae> {
    const cnae = this.ormRepository.create(data);

    await this.ormRepository.save(cnae);

    return cnae;
  }

  public async find(): Promise<Cnae[]> {
    return this.ormRepository.find();
  }

  public async findByCodigos(codigos: number[]): Promise<Cnae[]> {
    return this.ormRepository.find({ where: { codigo: In(codigos) } });
  }

  public async findOne(codigo: number): Promise<Cnae | undefined> {
    return this.ormRepository.findOne({ where: { codigo } });
  }

  public async save(cnae: Cnae): Promise<Cnae> {
    return this.ormRepository.save(cnae);
  }
}

export default CnaesRepository;
