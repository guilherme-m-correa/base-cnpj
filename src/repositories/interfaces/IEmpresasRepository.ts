import Empresa from '../../entities/Empresa';
import ICreateEmpresaDTO from '../../dtos/ICreateEmpresaDTO';

export default interface IEmpresasRepository {
  create(data: ICreateEmpresaDTO): Promise<Empresa>;
  save(empresa: Empresa): Promise<Empresa>;
  find(): Promise<Empresa[]>;
  findOne(cnpj: string): Promise<Empresa | undefined>;
}
