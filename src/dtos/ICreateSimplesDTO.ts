import Empresa from '../entities/Empresa';

export default interface ICreateSimplesDTO {
  empresa: Empresa;
  opcao_simples: string;
  data_opcao_simples: Date;
  data_exclusao_simples: Date;
  opcao_mei: string;
  data_opcao_mei: Date;
  data_exclusao_mei: Date;
}
