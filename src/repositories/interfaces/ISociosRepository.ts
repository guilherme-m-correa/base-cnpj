import Socio from '../../entities/Socio';
import ICreateSocioDTO from '../../dtos/ICreateSocioDTO';

export default interface ISociosRepository {
  create(data: ICreateSocioDTO): Promise<Socio>;
  save(socio: Socio): Promise<Socio>;
  find(): Promise<Socio[]>;
  findOne(empresa_id: number, cpf_cnpj: string): Promise<Socio | undefined>;
}
