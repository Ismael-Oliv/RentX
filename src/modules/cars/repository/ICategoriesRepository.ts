interface ICreateCategotyDTO {
  id: string;
  name: string;
  description: string;
  created_at: Date;
}

export interface ICategoriesRepository {
  create: ({ name, description }: ICreateCategotyDTO) => void;
  list: () => ICreateCategotyDTO[];
  findByName: (name: string) => ICreateCategotyDTO | undefined;
}
