import NaturezaJuridica from '../../entities/NaturezaJuridica';
import ICreateNaturezaJuridicaDTO from '../../dtos/ICreateNaturezaJuridicaDTO';

export default interface INaturezasJuridicasRepository {
  create(data: ICreateNaturezaJuridicaDTO): Promise<NaturezaJuridica>;
  save(naturezaJuridica: NaturezaJuridica): Promise<NaturezaJuridica>;
  find(): Promise<NaturezaJuridica[]>;
  findOne(codigo: number): Promise<NaturezaJuridica | undefined>;
}
