import { getRepository, Repository } from 'typeorm';

import ISociosRepository from '../interfaces/ISociosRepository';
import Socio from '../../entities/Socio';
import ICreateSocioDTO from '../../dtos/ICreateSocioDTO';

class SociosRepository implements ISociosRepository {
  private ormRepository: Repository<Socio>;

  constructor() {
    this.ormRepository = getRepository(Socio);
  }

  public async create(data: ICreateSocioDTO): Promise<Socio> {
    const socio = this.ormRepository.create(data);

    await this.ormRepository.save(socio);

    return socio;
  }

  public async find(): Promise<Socio[]> {
    return this.ormRepository.find();
  }

  public async findOne(
    empresa_id: number,
    cpf_cnpj: string,
  ): Promise<Socio | undefined> {
    return this.ormRepository.findOne({
      where: { empresa: { id: empresa_id }, cpf_cnpj },
    });
  }

  public async save(socio: Socio): Promise<Socio> {
    return this.ormRepository.save(socio);
  }
}

export default SociosRepository;
