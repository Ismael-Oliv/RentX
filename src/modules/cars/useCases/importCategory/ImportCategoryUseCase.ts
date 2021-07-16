import fs from "fs";
import csvParse from "csv-parse";
import { CategoryRepository } from "../../repository/Implementations/CategoryRepository";

interface IImportCategories {
  name: string;
  description: string;
}

export class ImportCategoryUseCase {
  constructor(private categoryRepository: CategoryRepository) {}

  loadCategories(file: Express.Multer.File): Promise<IImportCategories[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const categories: IImportCategories[] = [];

      const parseFile = csvParse();
      stream.pipe(parseFile);

      parseFile
        .on("data", async (line) => {
          const [name, description] = line;
          categories.push({
            name,
            description,
          });
        })
        .on("end", () => {
          fs.promises.unlink(file.path);
          resolve(categories);
        })
        .on("error", (err) => {
          reject(err);
        });
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file);

    categories.map((category) => {
      const { name, description } = category;

      const existsCategory = this.categoryRepository.findByName(name);

      if (!existsCategory) {
        this.categoryRepository.create({ name, description });
      }
    });
  }
}
