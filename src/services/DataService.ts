import { inject, injectable } from 'tsyringe';

import fs from 'fs';
import es from 'event-stream';
import path from 'path';

import ICnaesRepository from '../repositories/interfaces/ICnaesRepository';
import IEmpresasRepository from '../repositories/interfaces/IEmpresasRepository';
import IEstabelecimentosRepository from '../repositories/interfaces/IEstabelecimentosRepository';
import IEstabelecimentoCnaeSecundariosRepository from '../repositories/interfaces/IEstabelecimentoCnaeSecundariosRepository';
import IMunicipiosRepository from '../repositories/interfaces/IMunicipiosRepository';
import INaturezasJuridicasRepository from '../repositories/interfaces/INaturezasJuridicasRepository';
import IPaisesRepository from '../repositories/interfaces/IPaisesRepository';
import IQualificacoesSociosRepository from '../repositories/interfaces/IQualificacoesSociosRepository';
import ISimplesRepository from '../repositories/interfaces/ISimplesRepository';
import ISociosRepository from '../repositories/interfaces/ISociosRepository';

import { normalizeDate } from '../utils';

@injectable()
class DataService {
  constructor(
    @inject('CnaesRepository')
    private cnaesRepository: ICnaesRepository,
    @inject('EmpresasRepository')
    private empresasRepository: IEmpresasRepository,
    @inject('EstabelecimentosRepository')
    private estabelecimentosRepository: IEstabelecimentosRepository,
    @inject('EstabelecimentoCnaeSecundariosRepository')
    private estabelecimentoCnaeSecundariosRepository: IEstabelecimentoCnaeSecundariosRepository,
    @inject('MunicipiosRepository')
    private municipiosRepository: IMunicipiosRepository,
    @inject('NaturezasJuridicasRepository')
    private naturezasJuridicasRepository: INaturezasJuridicasRepository,
    @inject('PaisesRepository')
    private paisesRepository: IPaisesRepository,
    @inject('QualificacoesSociosRepository')
    private qualificacoesSociosRepository: IQualificacoesSociosRepository,
    @inject('SimplesRepository')
    private simplesRepository: ISimplesRepository,
    @inject('SociosRepository')
    private sociosRepository: ISociosRepository,
  ) {}

  public async execute(): Promise<void> {
    try {
      const folder = path.resolve(__dirname, '..', '..', 'data');

      const files = await fs.promises.readdir(folder);

      const cnaeFile = files.find((file: string) => file.match(/CNAECSV/));

      if (cnaeFile) {
        const filePath = path.resolve(folder, cnaeFile);

        const rows = fs.readFileSync(filePath).toString('utf8').split('\n');

        for (let index = 0; index < rows.length; index += 1) {
          const row = rows[index];

          const isEmptyRow = row.trim().length === 0;

          if (!isEmptyRow) {
            let [codigo, descricao] = row.split(';');

            codigo = codigo.slice(1, -1);
            descricao = descricao.slice(1, -1);

            console.log({
              codigo,
              descricao,
            });

            const cnaeExists = await this.cnaesRepository.findOne(
              Number(codigo),
            );

            if (!cnaeExists) {
              await this.cnaesRepository.create({
                codigo: Number(codigo),
                descricao,
              });
            }
          }
        }
      }

      const municipioFile = files.find((file: string) =>
        file.match(/MUNICCSV/),
      );

      if (municipioFile) {
        const filePath = path.resolve(folder, municipioFile);

        const rows = fs.readFileSync(filePath).toString('utf8').split('\n');

        for (let index = 0; index < rows.length; index += 1) {
          const row = rows[index];

          const isEmptyRow = row.trim().length === 0;

          if (!isEmptyRow) {
            let [codigo, descricao] = row.split(';');

            codigo = codigo.slice(1, -1);
            descricao = descricao.slice(1, -1);

            console.log({
              codigo,
              descricao,
            });

            const municipioExists = await this.municipiosRepository.findOne(
              Number(codigo),
            );

            if (!municipioExists) {
              await this.municipiosRepository.create({
                codigo: Number(codigo),
                descricao,
              });
            }
          }
        }
      }

      const naturezaJuridicaFile = files.find((file: string) =>
        file.match(/NATJUCSV/),
      );

      if (naturezaJuridicaFile) {
        const filePath = path.resolve(folder, naturezaJuridicaFile);

        const rows = fs.readFileSync(filePath).toString('utf8').split('\n');

        for (let index = 0; index < rows.length; index += 1) {
          const row = rows[index];

          const isEmptyRow = row.trim().length === 0;

          if (!isEmptyRow) {
            let [codigo, descricao] = row.split(';');

            codigo = codigo.slice(1, -1);
            descricao = descricao.slice(1, -1);

            console.log({
              codigo,
              descricao,
            });

            const naturezaJuridicaExists =
              await this.naturezasJuridicasRepository.findOne(Number(codigo));

            if (!naturezaJuridicaExists) {
              await this.naturezasJuridicasRepository.create({
                codigo: Number(codigo),
                descricao,
              });
            }
          }
        }
      }

      const paisFile = files.find((file: string) => file.match(/PAISCSV/));

      if (paisFile) {
        const filePath = path.resolve(folder, paisFile);

        const rows = fs.readFileSync(filePath).toString('utf8').split('\n');

        for (let index = 0; index < rows.length; index += 1) {
          const row = rows[index];

          const isEmptyRow = row.trim().length === 0;

          if (!isEmptyRow) {
            let [codigo, descricao] = row.split(';');

            codigo = codigo.slice(1, -1);
            descricao = descricao.slice(1, -1);

            console.log({
              codigo,
              descricao,
            });

            const paisExists = await this.paisesRepository.findOne(
              Number(codigo),
            );

            if (!paisExists) {
              await this.paisesRepository.create({
                codigo: Number(codigo),
                descricao,
              });
            }
          }
        }
      }

      const qualificacaoFile = files.find((file: string) =>
        file.match(/QUALSCSV/),
      );

      if (qualificacaoFile) {
        const filePath = path.resolve(folder, qualificacaoFile);

        const rows = fs.readFileSync(filePath).toString('utf8').split('\n');

        for (let index = 0; index < rows.length; index += 1) {
          const row = rows[index];

          const isEmptyRow = row.trim().length === 0;

          if (!isEmptyRow) {
            let [codigo, descricao] = row.split(';');

            codigo = codigo.slice(1, -1);
            descricao = descricao.slice(1, -1);

            console.log({
              codigo,
              descricao,
            });

            const qualificacaoExists =
              await this.qualificacoesSociosRepository.findOne(Number(codigo));

            if (!qualificacaoExists) {
              await this.qualificacoesSociosRepository.create({
                codigo: Number(codigo),
                descricao,
              });
            }
          }
        }
      }

      const empresaFiles = files.filter((file: string) =>
        file.match(/EMPRECSV/),
      );

      for (let index = 0; index < empresaFiles.length; index += 1) {
        const filename = empresaFiles[index];

        const filePath = path.resolve(folder, filename);

        const s = fs
          .createReadStream(filePath)
          .pipe(es.split())
          .pipe(
            es
              .mapSync(async (row: string) => {
                s.pause();

                let [
                  cnpj,
                  razao_social,
                  codigo_natureza_juridica,
                  codigo_qualificacao_responsavel,
                  capital_social,
                  porte,
                  ente_federativo_responsavel,
                ] = row.split(';');

                cnpj = cnpj.slice(1, -1);
                razao_social = razao_social.slice(1, -1);
                codigo_natureza_juridica = codigo_natureza_juridica.slice(
                  1,
                  -1,
                );
                codigo_qualificacao_responsavel =
                  codigo_qualificacao_responsavel.slice(1, -1);
                capital_social = capital_social.slice(1, -1);
                porte = porte.slice(1, -1);
                ente_federativo_responsavel = ente_federativo_responsavel.slice(
                  1,
                  -1,
                );

                console.log({
                  cnpj,
                  razao_social,
                  codigo_natureza_juridica,
                  codigo_qualificacao_responsavel,
                  capital_social:
                    Number(capital_social.replace(/\D/g, '')) * 100,
                  porte,
                  ente_federativo_responsavel,
                });

                const empresaExists = await this.empresasRepository.findOne(
                  cnpj,
                );

                if (!empresaExists) {
                  const natureza_juridica =
                    await this.naturezasJuridicasRepository.findOne(
                      Number(codigo_natureza_juridica),
                    );

                  if (!natureza_juridica) {
                    throw Error('Unexpected not finded natureza_juridica');
                  }

                  const qualificacao_do_responsavel =
                    await this.qualificacoesSociosRepository.findOne(
                      Number(codigo_qualificacao_responsavel),
                    );

                  if (!qualificacao_do_responsavel) {
                    throw Error(
                      'Unexpected not finded qualificacao_do_responsavel',
                    );
                  }

                  await this.empresasRepository.create({
                    cnpj,
                    razao_social,
                    natureza_juridica,
                    qualificacao_do_responsavel,
                    capital_social:
                      Number(capital_social.replace(/\D/g, '')) * 100,
                    porte,
                    ente_federativo_responsavel,
                  });
                }

                s.resume();
              })
              .on('error', (err: any) => {
                console.log('Error while reading file.', err);
              })
              .on('end', () => {
                console.log('Read entire file.');
              }),
          );
      }

      const estabelecimentoFiles = files.filter((file: string) =>
        file.match(/ESTABELE/),
      );

      for (let index = 0; index < estabelecimentoFiles.length; index += 1) {
        const filename = estabelecimentoFiles[index];

        const filePath = path.resolve(folder, filename);

        const s = fs
          .createReadStream(filePath)
          .pipe(es.split())
          .pipe(
            es
              .mapSync(async (row: string) => {
                s.pause();

                let [
                  cnpj_basico,
                  cnpj_ordem,
                  cnpj_dv,
                  identificador_matriz_filial,
                  nome_fantasia,
                  situacao_cadastral,
                  data_situacao_cadastral,
                  motivo_situacao_cadastral,
                  nome_cidade_exterior,
                  codigo_pais,
                  data_inicio_atividade,
                  codigo_cnae_fiscal_principal,
                  codigos_cnaes_secundarias,
                  tipo_logradouro,
                  logradouro,
                  numero,
                  complemento,
                  bairro,
                  cep,
                  uf,
                  codigo_municipio,
                  ddd_1,
                  telefone_1,
                  ddd_2,
                  telefone_2,
                  ddd_fax,
                  fax,
                  email,
                  situacao_especial,
                  data_situacao_especial,
                ] = row.split(';');

                cnpj_basico = cnpj_basico.slice(1, -1);
                cnpj_ordem = cnpj_ordem.slice(1, -1);
                cnpj_dv = cnpj_dv.slice(1, -1);
                identificador_matriz_filial = identificador_matriz_filial.slice(
                  1,
                  -1,
                );
                nome_fantasia = nome_fantasia.slice(1, -1);
                situacao_cadastral = situacao_cadastral.slice(1, -1);
                data_situacao_cadastral = data_situacao_cadastral.slice(1, -1);
                motivo_situacao_cadastral = motivo_situacao_cadastral.slice(
                  1,
                  -1,
                );
                nome_cidade_exterior = nome_cidade_exterior.slice(1, -1);
                codigo_pais = codigo_pais.slice(1, -1);
                data_inicio_atividade = data_inicio_atividade.slice(1, -1);
                codigo_cnae_fiscal_principal =
                  codigo_cnae_fiscal_principal.slice(1, -1);
                codigos_cnaes_secundarias = codigos_cnaes_secundarias.slice(
                  1,
                  -1,
                );
                tipo_logradouro = tipo_logradouro.slice(1, -1);
                logradouro = logradouro.slice(1, -1);
                numero = numero.slice(1, -1);
                complemento = complemento.slice(1, -1);
                bairro = bairro.slice(1, -1);
                cep = cep.slice(1, -1);
                uf = uf.slice(1, -1);
                codigo_municipio = codigo_municipio.slice(1, -1);
                ddd_1 = ddd_1.slice(1, -1);
                telefone_1 = telefone_1.slice(1, -1);
                ddd_2 = ddd_2.slice(1, -1);
                telefone_2 = telefone_2.slice(1, -1);
                ddd_fax = ddd_fax.slice(1, -1);
                fax = fax.slice(1, -1);
                email = email.slice(1, -1);
                situacao_especial = situacao_especial.slice(1, -1);
                data_situacao_especial = data_situacao_especial.slice(1, -1);

                console.log({
                  cnpj_basico,
                  cnpj_ordem,
                  cnpj_dv,
                  identificador_matriz_filial,
                  nome_fantasia,
                  situacao_cadastral,
                  data_situacao_cadastral,
                  motivo_situacao_cadastral,
                  nome_cidade_exterior,
                  codigo_pais,
                  data_inicio_atividade,
                  codigo_cnae_fiscal_principal,
                  codigos_cnaes_secundarias,
                  tipo_logradouro,
                  logradouro,
                  numero,
                  complemento,
                  bairro,
                  cep,
                  uf,
                  codigo_municipio,
                  ddd_1,
                  telefone_1,
                  ddd_2,
                  telefone_2,
                  ddd_fax,
                  fax,
                  email,
                  situacao_especial,
                  data_situacao_especial,
                });

                const cnpj = `${cnpj_basico}${cnpj_ordem}${cnpj_dv}`;

                const estabelecimentoExists =
                  await this.estabelecimentosRepository.findOne(cnpj);

                if (!estabelecimentoExists) {
                  const empresa = await this.empresasRepository.findOne(
                    cnpj_basico,
                  );

                  if (!empresa) {
                    s.resume();
                    return;
                    // throw Error('Unexpected not finded empresa');
                  }

                  const municipio = await this.municipiosRepository.findOne(
                    Number(codigo_municipio),
                  );

                  if (!municipio) {
                    throw Error('Unexpected not finded municipio');
                  }

                  const pais = await this.paisesRepository.findOne(
                    Number(codigo_pais),
                  );

                  if (!pais) {
                    throw Error('Unexpected not finded pais');
                  }

                  const cnae = await this.cnaesRepository.findOne(
                    Number(codigo_cnae_fiscal_principal),
                  );

                  if (!cnae) {
                    throw Error('Unexpected not finded cnae');
                  }

                  const estabelecimento =
                    await this.estabelecimentosRepository.create({
                      empresa,
                      cnpj,
                      identificador_matriz_filial,
                      nome_fantasia,
                      situacao_cadastral,
                      data_situacao_cadastral: normalizeDate(
                        data_situacao_cadastral,
                      ),
                      motivo_situacao_cadastral,
                      nome_cidade_exterior,
                      pais,
                      data_inicio_atividade: normalizeDate(
                        data_inicio_atividade,
                      ),
                      cnae_fiscal_principal: cnae,
                      tipo_logradouro,
                      logradouro,
                      numero,
                      complemento,
                      bairro,
                      cep,
                      uf,
                      municipio,
                      ddd_1,
                      telefone_1,
                      ddd_2,
                      telefone_2,
                      ddd_fax,
                      fax,
                      email,
                      situacao_especial,
                      data_situacao_especial: normalizeDate(
                        data_situacao_especial,
                      ),
                    });

                  const cnaes_secundarios_codigos = codigos_cnaes_secundarias
                    .split(',')
                    .map(cod => Number(cod));

                  const cnaes_secundarios =
                    await this.cnaesRepository.findByCodigos(
                      cnaes_secundarios_codigos,
                    );

                  for (let c = 0; c < cnaes_secundarios.length; c += 1) {
                    const cnae_secundario = cnaes_secundarios[c];

                    const estabelecimentoCnaeExists =
                      await this.estabelecimentoCnaeSecundariosRepository.findOne(
                        estabelecimento.id,
                        cnae_secundario.id,
                      );

                    if (!estabelecimentoCnaeExists) {
                      await this.estabelecimentoCnaeSecundariosRepository.create(
                        {
                          cnae_id: cnae_secundario.id,
                          estabelecimento_id: estabelecimento.id,
                        },
                      );
                    }
                  }
                }

                s.resume();
              })
              .on('error', (err: any) => {
                console.log('Error while reading file.', err);
              })
              .on('end', () => {
                console.log('Read entire file.');
              }),
          );
      }

      const socioFiles = files.filter((file: string) => file.match(/SOCIOCSV/));

      for (let index = 0; index < socioFiles.length; index += 1) {
        const filename = socioFiles[index];

        const filePath = path.resolve(folder, filename);

        const s = fs
          .createReadStream(filePath)
          .pipe(es.split())
          .pipe(
            es
              .mapSync(async (row: string) => {
                s.pause();
                let [
                  cnpj,
                  identificador_socio,
                  nome_razao_social,
                  cpf_cnpj,
                  codigo_qualificacao_socio,
                  data_entrada_sociedade,
                  codigo_pais,
                  cpf_representante_legal,
                  nome_representante_legal,
                  codigo_qualificacao_respresentante_legal,
                  faixa_etaria,
                ] = row.split(';');

                cnpj = cnpj.slice(1, -1);
                identificador_socio = identificador_socio.slice(1, -1);
                nome_razao_social = nome_razao_social.slice(1, -1);
                cpf_cnpj = cpf_cnpj.slice(1, -1);
                codigo_qualificacao_socio = codigo_qualificacao_socio.slice(
                  1,
                  -1,
                );
                data_entrada_sociedade = data_entrada_sociedade.slice(1, -1);
                codigo_pais = codigo_pais.slice(1, -1);
                cpf_representante_legal = cpf_representante_legal.slice(1, -1);
                nome_representante_legal = nome_representante_legal.slice(
                  1,
                  -1,
                );
                codigo_qualificacao_respresentante_legal =
                  codigo_qualificacao_respresentante_legal.slice(1, -1);
                faixa_etaria = faixa_etaria.slice(1, -1);

                console.log({
                  cnpj,
                  identificador_socio,
                  nome_razao_social,
                  cpf_cnpj,
                  codigo_qualificacao_socio,
                  data_entrada_sociedade,
                  codigo_pais,
                  cpf_representante_legal,
                  nome_representante_legal,
                  codigo_qualificacao_respresentante_legal,
                  faixa_etaria,
                });

                const empresa = await this.empresasRepository.findOne(cnpj);

                if (!empresa) {
                  s.resume();
                  return;
                  // throw Error('Unexpected not finded empresa');
                }

                const qualificacao_socio =
                  await this.qualificacoesSociosRepository.findOne(
                    Number(codigo_qualificacao_socio),
                  );

                if (!qualificacao_socio) {
                  throw Error('Unexpected not finded qualificacao_socio');
                }

                const qualificacao_respresentante_legal =
                  await this.qualificacoesSociosRepository.findOne(
                    Number(codigo_qualificacao_respresentante_legal),
                  );

                if (!qualificacao_respresentante_legal) {
                  throw Error(
                    'Unexpected not finded qualificacao_respresentante_legal',
                  );
                }

                const pais = await this.paisesRepository.findOne(
                  Number(codigo_pais),
                );

                if (!pais) {
                  throw Error('Unexpected not finded pais');
                }

                const socioExists = await this.sociosRepository.findOne(
                  empresa.id,
                  cpf_cnpj,
                );

                if (!socioExists) {
                  await this.sociosRepository.create({
                    empresa,
                    identificador_socio,
                    nome_razao_social,
                    cpf_cnpj,
                    qualificacao_socio,
                    data_entrada_sociedade: normalizeDate(
                      data_entrada_sociedade,
                    ),
                    pais,
                    cpf_representante_legal,
                    nome_representante_legal,
                    qualificacao_respresentante_legal,
                    faixa_etaria,
                  });
                }

                s.resume();
              })
              .on('error', (err: any) => {
                console.log('Error while reading file.', err);
              })
              .on('end', () => {
                console.log('Read entire file.');
              }),
          );
      }

      const simplesFile = files.find((file: string) =>
        file.match(/SIMPLES\.CSV/),
      );

      if (simplesFile) {
        const filePath = path.resolve(folder, simplesFile);

        const s = fs
          .createReadStream(filePath)
          .pipe(es.split())
          .pipe(
            es
              .mapSync(async (row: string) => {
                s.pause();

                let [
                  cnpj,
                  opcao_simples,
                  data_opcao_simples,
                  data_exclusao_simples,
                  opcao_mei,
                  data_opcao_mei,
                  data_exclusao_mei,
                ] = row.split(';');

                cnpj = cnpj.slice(1, -1);
                opcao_simples = opcao_simples.slice(1, -1);
                data_opcao_simples = data_opcao_simples.slice(1, -1);
                data_exclusao_simples = data_exclusao_simples.slice(1, -1);
                opcao_mei = opcao_mei.slice(1, -1);
                data_opcao_mei = data_opcao_mei.slice(1, -1);
                data_exclusao_mei = data_exclusao_mei.slice(1, -1);

                console.log({
                  cnpj,
                  opcao_simples,
                  data_opcao_simples,
                  data_exclusao_simples,
                  opcao_mei,
                  data_opcao_mei,
                  data_exclusao_mei,
                });

                const simplesExists = await this.simplesRepository.findOne(
                  cnpj,
                );

                if (!simplesExists) {
                  const empresa = await this.empresasRepository.findOne(cnpj);

                  if (!empresa) {
                    s.resume();
                    return;
                    // throw Error('Unexpected not finded empresa');
                  }

                  await this.simplesRepository.create({
                    empresa,
                    opcao_simples,
                    data_opcao_simples: normalizeDate(data_opcao_simples),
                    data_exclusao_simples: normalizeDate(data_exclusao_simples),
                    opcao_mei,
                    data_opcao_mei: normalizeDate(data_opcao_mei),
                    data_exclusao_mei: normalizeDate(data_exclusao_mei),
                  });
                }

                s.resume();
              })
              .on('error', (err: any) => {
                console.log('Error while reading file.', err);
              })
              .on('end', () => {
                console.log('Read entire file.');
              }),
          );
      }
    } catch (err) {
      console.error(err);
    }
  }
}

export default DataService;
