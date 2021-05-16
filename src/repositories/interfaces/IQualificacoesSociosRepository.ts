import QualificacaoSocio from '../../entities/QualificacaoSocio';
import ICreateQualificacaoSocioDTO from '../../dtos/ICreateQualificacaoSocioDTO';

export default interface IQualificacoesSociosRepository {
  create(data: ICreateQualificacaoSocioDTO): Promise<QualificacaoSocio>;
  save(qualificacaoSocio: QualificacaoSocio): Promise<QualificacaoSocio>;
  find(): Promise<QualificacaoSocio[]>;
  findOne(codigo: number): Promise<QualificacaoSocio | undefined>;
}
