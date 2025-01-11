import { Router, Request, Response } from 'express';
import * as handlers from './employee.handler';

const employeeRouter = Router();

employeeRouter.get('/', handlers.getAllEmployees);
employeeRouter.get('/:id', handlers.getEmployeeById);

export default employeeRouter;
