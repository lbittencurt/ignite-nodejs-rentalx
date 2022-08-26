import { Category } from "../model/Category";

export interface ISpecificationsRepositoryDTO {
  name: string;
  description: string;
}

export interface ISpecificationsRepository {
  findByName: (name: string) => Category;
  // index: () => Category[];
  create: (category: ISpecificationsRepositoryDTO) => void;
}
