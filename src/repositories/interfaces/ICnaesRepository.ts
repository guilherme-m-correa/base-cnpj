import Cnae from '../../entities/Cnae';
import ICreateCnaeDTO from '../../dtos/ICreateCnaeDTO';

export default interface ICnaesRepository {
  create(data: ICreateCnaeDTO): Promise<Cnae>;
  save(cnae: Cnae): Promise<Cnae>;
  find(): Promise<Cnae[]>;
  findByCodigos(codigos: number[]): Promise<Cnae[]>;
  findOne(codigo: number): Promise<Cnae | undefined>;
}
