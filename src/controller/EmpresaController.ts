import { Request, Response } from 'express';
import { container } from 'tsyringe';
import ShowEmpresaService from '../services/ShowEmpresaService';

class EmpresaController {
  public async show(request: Request, response: Response): Promise<Response> {
    const showEmpresaService = container.resolve(ShowEmpresaService);

    const { cnpj } = request.params;

    const empresa = await showEmpresaService.execute({ cnpj });

    return response.status(200).json(empresa);
  }
}

export default new EmpresaController();
