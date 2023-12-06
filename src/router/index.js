import { Router } from "express";
import express from 'express'
import * as AuthController from '../controller/AuthController'
const baseRouter = Router();

baseRouter.post('/reigster',AuthController.register);


export default baseRouter