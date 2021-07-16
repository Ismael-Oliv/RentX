import { Specification } from "../model/Specification";

export interface ICreateSpecificatonDTO {
  name: string;
  description: string;
}

export interface ISpecificationRepository {
  create({ name, description }: ICreateSpecificatonDTO): void;
  findByName(name: string): Specification | undefined;
}
