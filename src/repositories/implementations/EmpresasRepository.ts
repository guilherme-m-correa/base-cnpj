import { getRepository, Repository } from 'typeorm';

import IEmpresasRepository from '../interfaces/IEmpresasRepository';
import Empresa from '../../entities/Empresa';
import ICreateEmpresaDTO from '../../dtos/ICreateEmpresaDTO';

class EmpresasRepository implements IEmpresasRepository {
  private ormRepository: Repository<Empresa>;

  constructor() {
    this.ormRepository = getRepository(Empresa);
  }

  public async create(data: ICreateEmpresaDTO): Promise<Empresa> {
    const empresa = this.ormRepository.create(data);

    await this.ormRepository.save(empresa);

    return empresa;
  }

  public async find(): Promise<Empresa[]> {
    return this.ormRepository.find();
  }

  public async findOne(cnpj: string): Promise<Empresa | undefined> {
    return this.ormRepository.findOne({ where: { cnpj } });
  }

  public async save(empresa: Empresa): Promise<Empresa> {
    return this.ormRepository.save(empresa);
  }
}

export default EmpresasRepository;
