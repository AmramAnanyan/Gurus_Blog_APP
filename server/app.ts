import express, { Application, Router } from 'express';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';
import { PORT } from './configs/constants';
import Blog from './routes/blog';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import { options } from './utils/swagger';

class App {
  static prisma = new PrismaClient();
  #app: Application = express();
  #globalMiddleWares() {
    this.#app.use(
      cors({ methods: ['GET', 'POST', 'PUT', 'DELETE'], credentials: true })
    );
    this.#app.use(express.json());
    this.#app.use(express.urlencoded({ extended: false }));
    const swaggerSpec = swaggerJsdoc(options);
    this.#app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  }
  #routerMiddleWares() {
    this.#app.use(Blog.routers());
  }
  #runServer() {
    this.#app.listen(PORT, (error) => {
      console.error(error, 'Server run error');
    });
  }
  public run() {
    try {
      this.#runServer();
      this.#globalMiddleWares();
      this.#routerMiddleWares();
    } catch (error) {
      console.error(error);
    }
  }
}
export default App;
