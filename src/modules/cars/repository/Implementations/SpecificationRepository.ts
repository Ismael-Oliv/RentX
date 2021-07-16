import { Specification } from "../../model/Specification";
import {
  ISpecificationRepository,
  ICreateSpecificatonDTO,
} from "../ISpecificationRepository";

export class SpecificationRepository implements ISpecificationRepository {
  private specification: Specification[];

  constructor() {
    this.specification = [];
  }
  create({ name, description }: ICreateSpecificatonDTO): void {
    const specification = new Specification();
    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });

    this.specification.push(specification);
  }

  findByName(name: string): Specification | undefined {
    const specification = this.specification.find(
      (Specification) => Specification.name === name
    );

    return specification;
  }
}
