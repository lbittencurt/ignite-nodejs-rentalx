import { Specification } from "../../model/Specification";
import {
  ISpecificationsRepository,
  ISpecificationsRepositoryDTO,
} from "../ISpecificationsRepository";

export class MemorySpecificationsRepository
  implements ISpecificationsRepository
{
  private specifications: Specification[];

  constructor() {
    this.specifications = [];
  }

  create({ name, description }: ISpecificationsRepositoryDTO) {
    const specification = new Specification();
    Object.assign(specification, { name, description, created_at: Date.now() });

    this.specifications.push(specification);
  }

  findByName(name: string): Specification {
    const specification = this.specifications.find(
      (specification) => specification.name === name
    );
    return specification;
  }
}
