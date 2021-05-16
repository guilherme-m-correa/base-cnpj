import NaturezaJuridica from '../entities/NaturezaJuridica';
import QualificacaoSocio from '../entities/QualificacaoSocio';

export default interface ICreateEmpresaDTO {
  cnpj: string;
  razao_social: string;
  natureza_juridica: NaturezaJuridica;
  qualificacao_do_responsavel: QualificacaoSocio;
  capital_social: number;
  porte: string;
  ente_federativo_responsavel: string;
}
