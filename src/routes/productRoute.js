import { Router, express } from "express";
import * as productController from '../controller/productController'

const baseRouter = Router();

baseRouter.get('/',productController.getAll);
baseRouter.post('/add',productController.add);

module.exports = baseRouter