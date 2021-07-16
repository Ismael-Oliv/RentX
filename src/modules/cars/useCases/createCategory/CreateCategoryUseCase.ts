import { CategoryRepository } from "../../repository/Implementations/CategoryRepository";

interface IRequest {
  name: string;
  description: string;
}

export class CreateCategoryUseCase {
  private categoriesRepository: CategoryRepository;

  constructor(categoriesRepository: CategoryRepository) {
    this.categoriesRepository = categoriesRepository;
  }

  public execute({ name, description }: IRequest): void {
    if (!name || !description) {
      throw new Error("Invalid data");
    }

    const ExistentCategory = this.categoriesRepository.findByName(name);

    if (ExistentCategory) {
      throw new Error("Category already exist !");
    }

    this.categoriesRepository.create({ name, description });
  }
}
