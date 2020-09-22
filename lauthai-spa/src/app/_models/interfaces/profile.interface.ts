import { IUniversity } from './university.interface';

export interface IProfile {
  id: number;
  check:number;
  name: string;
  age: number;
  pfpUrl: string;
  job: string;
  marriedStatus: string;
  district: string;
  phone: string;
  price: number;
  universityId?: number;
  university: IUniversity;
}
