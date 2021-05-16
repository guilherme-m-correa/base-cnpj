import Empresa from '../entities/Empresa';
import Pais from '../entities/Pais';
import QualificacaoSocio from '../entities/QualificacaoSocio';

export default interface ICreateSocioDTO {
  empresa: Empresa;
  identificador_socio: string;
  nome_razao_social: string;
  cpf_cnpj: string;
  qualificacao_socio: QualificacaoSocio;
  data_entrada_sociedade: Date;
  pais: Pais;
  cpf_representante_legal: string;
  nome_representante_legal: string;
  qualificacao_respresentante_legal: QualificacaoSocio;
  faixa_etaria: string;
}
