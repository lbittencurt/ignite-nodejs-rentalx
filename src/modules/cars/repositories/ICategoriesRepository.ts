import { Category } from "../model/Category";

export interface ICreateCategoryDTO {
  name: string;
  description: string;
}

export interface ICategoriesRepository {
  findByName: (name: string) => Category;
  index: () => Category[];
  create: (category: ICreateCategoryDTO) => void;
}
