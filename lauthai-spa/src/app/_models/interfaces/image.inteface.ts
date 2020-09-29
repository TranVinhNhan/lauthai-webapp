import { IProfile } from './profile.interface';

export interface IImage {
  id: number;
  url: string;
  isMainPfp: boolean;
  profileId: number;
  profile: IProfile;
}

