import express from 'express';
import { CategoriesRoutes } from './routes/Categories.Routes';

const app = express();

app.use(express.json());

app.use('/categories', CategoriesRoutes);

app.listen(3333, () => console.log('Servidor está rondando'));
