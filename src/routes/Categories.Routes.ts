import { Router } from 'express';
import { CategoryRepository } from '../repository/CategoryRepository';
import { CreateCategoryService } from '../services/CreateCategoryService';

const CategoriesRoutes = Router();
const categoriesRepository = new CategoryRepository();

CategoriesRoutes.post('/', (request, response) => {
	const { name, description } = request.body;

	const createCategoryService = new CreateCategoryService(categoriesRepository);

	createCategoryService.execute({name, description})

	return response.status(201).send();
});

CategoriesRoutes.get('/', (request, response) => {
	const categories = categoriesRepository.list();
	response.json(categories);
});

export { CategoriesRoutes };
