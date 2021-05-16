import Municipio from '../../entities/Municipio';
import ICreateMunicipioDTO from '../../dtos/ICreateMunicipioDTO';

export default interface IMunicipiosRepository {
  create(data: ICreateMunicipioDTO): Promise<Municipio>;
  save(municipio: Municipio): Promise<Municipio>;
  find(): Promise<Municipio[]>;
  findOne(codigo: number): Promise<Municipio | undefined>;
}
