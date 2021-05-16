import { getRepository, Repository } from 'typeorm';

import IQualificacoesSociosRepository from '../interfaces/IQualificacoesSociosRepository';
import QualificacaoSocio from '../../entities/QualificacaoSocio';
import ICreateQualificacaoSocioDTO from '../../dtos/ICreateQualificacaoSocioDTO';

class QualificacoesSociosRepository implements IQualificacoesSociosRepository {
  private ormRepository: Repository<QualificacaoSocio>;

  constructor() {
    this.ormRepository = getRepository(QualificacaoSocio);
  }

  public async create(
    data: ICreateQualificacaoSocioDTO,
  ): Promise<QualificacaoSocio> {
    const qualificacaoSocio = this.ormRepository.create(data);

    await this.ormRepository.save(qualificacaoSocio);

    return qualificacaoSocio;
  }

  public async find(): Promise<QualificacaoSocio[]> {
    return this.ormRepository.find();
  }

  public async findOne(codigo: number): Promise<QualificacaoSocio | undefined> {
    return this.ormRepository.findOne({ where: { codigo } });
  }

  public async save(
    qualificacaoSocio: QualificacaoSocio,
  ): Promise<QualificacaoSocio> {
    return this.ormRepository.save(qualificacaoSocio);
  }
}

export default QualificacoesSociosRepository;
