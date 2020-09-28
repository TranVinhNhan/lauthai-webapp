import { ICategory } from './category.interface';
import { IImage } from './image.inteface';
import { IUniversity } from './university.interface';

export interface IProfile {
  id: number;
  name: string;
  age: number;
  job: string;
  marriedStatus: string;
  district: string;
  phone: string;
  price: number;
  universityId?: number;
  university: IUniversity;
  categoryId?: number;
  category: ICategory;
  images: IImage[];
}
