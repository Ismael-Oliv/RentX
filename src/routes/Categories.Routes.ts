import { Router } from 'express';
import { CategoryRepository } from '../repository/CategoryRepository';

const CategoriesRoutes = Router();
const categoriesRepository = new CategoryRepository();

CategoriesRoutes.post('/', (request, response) => {
	const { name, description } = request.body;

	if (!name || !description) {
		return response.status(400).json({ error: 'Invalid data' });
	}

	const ExistentCategory = categoriesRepository.findByName(name);

	if (ExistentCategory) {
		return response.status(400).json({ error: 'Category already exist !' });
	}

	categoriesRepository.create({ name, description });

	return response.status(201).send();
});

CategoriesRoutes.get('/', (request, response) => {
	const categories = categoriesRepository.list();
	response.json(categories);
});

export { CategoriesRoutes };
