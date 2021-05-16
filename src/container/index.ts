import { container } from 'tsyringe';

import CnaesRepository from '../repositories/implementations/CnaesRepository';
import ICnaesRepository from '../repositories/interfaces/ICnaesRepository';

import MunicipiosRepository from '../repositories/implementations/MunicipiosRepository';
import IMunicipiosRepository from '../repositories/interfaces/IMunicipiosRepository';

import NaturezasJuridicasRepository from '../repositories/implementations/NaturezasJuridicasRepository';
import INaturezasJuridicasRepository from '../repositories/interfaces/INaturezasJuridicasRepository';

import QualificacoesSociosRepository from '../repositories/implementations/QualificacoesSociosRepository';
import IQualificacoesSociosRepository from '../repositories/interfaces/IQualificacoesSociosRepository';

import PaisesRepository from '../repositories/implementations/PaisesRepository';
import IPaisesRepository from '../repositories/interfaces/IPaisesRepository';

import EmpresasRepository from '../repositories/implementations/EmpresasRepository';
import IEmpresasRepository from '../repositories/interfaces/IEmpresasRepository';

import EstabelecimentosRepository from '../repositories/implementations/EstabelecimentosRepository';
import IEstabelecimentosRepository from '../repositories/interfaces/IEstabelecimentosRepository';

import SociosRepository from '../repositories/implementations/SociosRepository';
import ISociosRepository from '../repositories/interfaces/ISociosRepository';

import SimplesRepository from '../repositories/implementations/SimplesRepository';
import ISimplesRepository from '../repositories/interfaces/ISimplesRepository';

import EstabelecimentoCnaeSecundariosRepository from '../repositories/implementations/EstabelecimentoCnaeSecundariosRepository';
import IEstabelecimentoCnaeSecundariosRepository from '../repositories/interfaces/IEstabelecimentoCnaeSecundariosRepository';

container.registerSingleton<ICnaesRepository>(
  'CnaesRepository',
  CnaesRepository,
);

container.registerSingleton<IMunicipiosRepository>(
  'MunicipiosRepository',
  MunicipiosRepository,
);

container.registerSingleton<INaturezasJuridicasRepository>(
  'NaturezasJuridicasRepository',
  NaturezasJuridicasRepository,
);

container.registerSingleton<IQualificacoesSociosRepository>(
  'QualificacoesSociosRepository',
  QualificacoesSociosRepository,
);

container.registerSingleton<IPaisesRepository>(
  'PaisesRepository',
  PaisesRepository,
);

container.registerSingleton<IEmpresasRepository>(
  'EmpresasRepository',
  EmpresasRepository,
);

container.registerSingleton<IEstabelecimentosRepository>(
  'EstabelecimentosRepository',
  EstabelecimentosRepository,
);

container.registerSingleton<ISociosRepository>(
  'SociosRepository',
  SociosRepository,
);

container.registerSingleton<ISimplesRepository>(
  'SimplesRepository',
  SimplesRepository,
);

container.registerSingleton<IEstabelecimentoCnaeSecundariosRepository>(
  'EstabelecimentoCnaeSecundariosRepository',
  EstabelecimentoCnaeSecundariosRepository,
);
