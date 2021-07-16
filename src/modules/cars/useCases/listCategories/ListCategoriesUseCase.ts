import { Category } from "../../model/Category";
import { ICategoriesRepository } from "../../repository/ICategoriesRepository";

export class ListCategoriesUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  public execute(): Category[] {
    const categories = this.categoriesRepository.list();

    return categories;
  }
}
