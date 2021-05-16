import { getRepository, Repository } from 'typeorm';

import INaturezasJuridicasRepository from '../interfaces/INaturezasJuridicasRepository';
import NaturezaJuridica from '../../entities/NaturezaJuridica';
import ICreateNaturezaJuridicaDTO from '../../dtos/ICreateNaturezaJuridicaDTO';

class NaturezaJuridicasRepository implements INaturezasJuridicasRepository {
  private ormRepository: Repository<NaturezaJuridica>;

  constructor() {
    this.ormRepository = getRepository(NaturezaJuridica);
  }

  public async create(
    data: ICreateNaturezaJuridicaDTO,
  ): Promise<NaturezaJuridica> {
    const naturezaJuridica = this.ormRepository.create(data);

    await this.ormRepository.save(naturezaJuridica);

    return naturezaJuridica;
  }

  public async find(): Promise<NaturezaJuridica[]> {
    return this.ormRepository.find();
  }

  public async findOne(codigo: number): Promise<NaturezaJuridica | undefined> {
    return this.ormRepository.findOne({ where: { codigo } });
  }

  public async save(
    naturezaJuridica: NaturezaJuridica,
  ): Promise<NaturezaJuridica> {
    return this.ormRepository.save(naturezaJuridica);
  }
}

export default NaturezaJuridicasRepository;
