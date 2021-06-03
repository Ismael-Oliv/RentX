import { Category } from '../model/Category';

interface ICreateCategotyDTO {
	name: string;
	description: string;
}

export class CategoryRepository {
	private categories: Category[];

	constructor() {
		this.categories = [];
	}

	public create({ name, description }: ICreateCategotyDTO): void {
		const category = new Category();

		Object.assign(category, {
			name,
			description,
			created_at: new Date()
		});

		this.categories.push(category);
	}

	public list(): Category[] {
		return this.categories;
	}

	public findByName(name: string): Category | undefined {
		const category = this.categories.find((category) => category.name === name);

		return category;
	}
}
