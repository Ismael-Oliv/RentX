import { Router } from 'express';
import { CategoryRepository } from '../repository/CategoryRepository';

const CategoriesRoutes = Router();
const categoriesRepository = new CategoryRepository();

CategoriesRoutes.post('/', (request, response) => {
	const { name, description } = request.body;

	categoriesRepository.create({ name, description });

	return response.status(201).send();
});

CategoriesRoutes.get('/categories', (request, response) => {
	const categories = categoriesRepository.list();
	response.json(categories);
});

export { CategoriesRoutes };
