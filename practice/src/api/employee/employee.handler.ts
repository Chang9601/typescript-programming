import { NextFunction, Request, Response } from 'express';
import { Employee } from './employee.model';

type ObjectWithId = {
  id: string;
};

export async function getAllEmployees(
  request: Request,
  response: Response<Employee[]>,
  next: NextFunction
) {
  try {
    const allEmployees: Employee[] = [];

    response.json(allEmployees);
  } catch (error) {
    next(error);
  }
}

export async function getEmployeeById(
  request: Request<{ id: string }>,
  response: Response<Employee | undefined>,
  next: NextFunction
) {
  try {
    const id = request.params.id;
    const employee = undefined;

    response.json(employee);
  } catch (error) {
    next(error);
  }
}

export async function addEmployee(
  request: Request<{}, ObjectWithId, Employee>,
  response: Response<ObjectWithId>,
  next: NextFunction
) {
  try {
    response.json({ id: '123' });
  } catch (error) {
    next(error);
  }
}
