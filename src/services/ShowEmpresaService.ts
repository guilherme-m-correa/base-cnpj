import { inject, injectable } from 'tsyringe';
import Empresa from '../entities/Empresa';
import AppError from '../errors/AppError';

import IEmpresasRepository from '../repositories/interfaces/IEmpresasRepository';

interface IRequest {
  cnpj: string;
}

@injectable()
class DataService {
  constructor(
    @inject('EmpresasRepository')
    private empresasRepository: IEmpresasRepository,
  ) {}

  public async execute({ cnpj }: IRequest): Promise<Empresa> {
    const empresa = await this.empresasRepository.findOne(cnpj);

    if (!empresa) {
      throw new AppError('Empresa não encontrada', 404);
    }

    return empresa;
  }
}

export default DataService;
