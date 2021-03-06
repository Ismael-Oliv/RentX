import { ISpecificationRepository } from "../../repository/ISpecificationRepository";

interface IRequest {
  name: string;
  description: string;
}

export class CreateSpecificationsUseCase {
  constructor(private specificationsRepository: ISpecificationRepository) {}

  public execute({ name, description }: IRequest): void {
    const specificationAlreadyExists =
      this.specificationsRepository.findByName(name);

    if (!specificationAlreadyExists) {
      throw new Error("Specification already exists");
    }
    this.specificationsRepository.create({ name, description });
  }
}
