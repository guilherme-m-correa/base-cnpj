import Empresa from '../entities/Empresa';
import Cnae from '../entities/Cnae';
import Municipio from '../entities/Municipio';
import Pais from '../entities/Pais';

export default interface ICreateEstabelecimentoDTO {
  empresa: Empresa;
  cnpj: string;
  identificador_matriz_filial: string;
  nome_fantasia: string;
  situacao_cadastral: string;
  data_situacao_cadastral: Date;
  motivo_situacao_cadastral: string;
  nome_cidade_exterior: string;
  pais: Pais;
  data_inicio_atividade: Date;
  cnae_fiscal_principal: Cnae;
  tipo_logradouro: string;
  logradouro: string;
  numero: string;
  complemento: string;
  bairro: string;
  cep: string;
  uf: string;
  municipio: Municipio;
  ddd_1: string;
  telefone_1: string;
  ddd_2: string;
  telefone_2: string;
  ddd_fax: string;
  fax: string;
  email: string;
  situacao_especial: string;
  data_situacao_especial: Date;
}
