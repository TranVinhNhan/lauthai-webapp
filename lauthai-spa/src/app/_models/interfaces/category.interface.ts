import { IProfile } from './profile.interface';

export interface ICategory {
  id: number;
  name: string;
  profiles: IProfile[];
}
