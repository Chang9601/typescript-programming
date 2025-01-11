import express, { Request, Response } from 'express';
import employeeRouter from './api/employee/employee.route';

const port = 3000;

export class Server {
  private app = express();

  start() {
    this.app.use('/employees', employeeRouter);

    this.app.get('/hello', (request: Request, response: Response) => {
      response.send('안녕!');
    });

    this.app.listen(port, () => {
      console.log(`포트 ${port}에서 수신 중`);
    });
  }
}

new Server().start();
