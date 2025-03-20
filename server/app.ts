import express, {
  Application,
  ErrorRequestHandler,
  NextFunction,
  Request,
  Response,
  Router,
} from 'express';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';
import { PORT } from './configs/constants';
import Blog from './routes/blog';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import { options } from './utils/swagger';
import fs from 'fs';

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
    this.#app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  }
  #routerMiddleWares() {
    this.#app.use(Blog.routers());
  }
  #runServer() {
    this.#app.listen(PORT, (error) => {
      console.error(`Server run on PORT:${PORT}`);
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
