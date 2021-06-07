import { CategoryRepository } from "../repository/CategoryRepository";

interface IRequest{
    name: string,
    description: string
}

export class CreateCategoryService{
    private categoriesRepository: CategoryRepository

    constructor(categoriesRepository: CategoryRepository){
        this.categoriesRepository = categoriesRepository
    }

    execute({name, description}:IRequest): void{

        if (!name || !description) {
		    throw new Error('Invalid data');
	    }

	    const ExistentCategory = this.categoriesRepository.findByName(name);

        if (ExistentCategory) {
            throw new Error('Category already exist !');
        }

	    this.categoriesRepository.create({ name, description }); 
    }
}