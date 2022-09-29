import 'reflect-metadata';
import '@shared/infra/http/container';
import { createConnections } from 'typeorm';
import { app } from '@shared/infra/app';

createConnections().then(async () => {
  app.listen(3333, () => {
    console.log('Server started on PORT 3333');
  });
});
