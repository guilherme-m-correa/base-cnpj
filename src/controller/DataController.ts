import { Request, Response } from 'express';
import { container } from 'tsyringe';
import DataService from '../services/DataService';

class DataController {
  public async store(request: Request, response: Response): Promise<Response> {
    const dataService = container.resolve(DataService);

    await dataService.execute();

    return response.status(200).json();
  }
}

export default new DataController();
