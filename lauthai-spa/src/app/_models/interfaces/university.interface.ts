import { IProfile } from './profile.interface';

export interface IUniversity {
  id: number;
  name: string;
  profiles: IProfile[];
}
