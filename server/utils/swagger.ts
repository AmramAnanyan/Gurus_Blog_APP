import swaggerJsdoc from 'swagger-jsdoc';

export const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Blog API',
      version: '1.0.0',
      description: 'A simple Blog API with Swagger',
    },
    servers: [{ url: 'http://localhost:8080' }],
  },
  apis: ['./routes/*.ts'],
};
