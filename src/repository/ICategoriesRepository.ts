interface ICreateCategotyDTO {
  name: string;
  description: string;
}

export interface ICategoriesRepository {
  create: ({ name, description }: ICreateCategotyDTO) => void;
  list: () => ICreateCategotyDTO[];
  findByName: (name: string) => ICreateCategotyDTO | undefined;
}
