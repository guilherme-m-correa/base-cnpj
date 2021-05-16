import { Router } from 'express';

import DataController from '../controller/DataController';
import EmpresaController from '../controller/EmpresaController';

const routes = Router();

routes.post('/', DataController.store);

routes.get('/empresas/:cnpj', EmpresaController.show);

export default routes;
