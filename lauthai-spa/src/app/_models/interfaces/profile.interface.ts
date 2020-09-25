<<<<<<< HEAD
import { ICategory } from './category.interface';
=======
import { IImage } from './image.inteface';
>>>>>>> f9bc99b2711fa11666b3fa52a71346b0cc538d19
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
<<<<<<< HEAD
  categoryId?: number;
  category: ICategory;
=======
  images: IImage[];
>>>>>>> f9bc99b2711fa11666b3fa52a71346b0cc538d19
}
