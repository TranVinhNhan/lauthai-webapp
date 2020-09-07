import { Injectable } from '@angular/core';
import { Profile } from '../_interfaces/profile.interface';

const NAMES: string[] = [
  'Anh', 'Nhi', 'Bình', 'Hoa', 'Trang',
  'Như', 'Thy', 'Mai', 'Loan', 'Linh',
  'Huỳnh', 'Trà', 'Thanh', 'Thúy', 'Trinh'
];

const SURNAMES: string[] = [
  'Tuyết', 'Thu', 'Thanh', 'Thị', 'Kiều',
  'Ngọc', 'Huỳnh', 'Hồng'
];

const UNI: string[] = [
  'HUFLIT', 'HUTECH'
];

const AGE: number[] = [18, 19, 20, 21, 22];

const DISTRICT: string[] = [
  'Quận 1', 'Quận 2', 'Quận 3', 'Quận 4', 'Quận 5', 'Quận 6',
  'Quận 7', 'Quận 8', 'Quận 9', 'Quận 10', 'Quận 11', 'Quận 12',
  'Quận Thủ Đức', 'Quận Gò Vấp'
];

@Injectable({
  providedIn: 'root'
})

export class ProfileService {
  getProfiles(qty: number): Profile[] {
    return Array.from({ length: qty }, (_, i) => this.createNewProfile(i + 1));
  }

  private createNewProfile(id: number): Profile {
    const name =
      SURNAMES[Math.round(Math.random() * (SURNAMES.length - 1))] +
      ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))];

    const uni = UNI[Math.round(Math.random() * (UNI.length - 1))];

    const age = AGE[Math.round(Math.random() * (AGE.length - 1))];

    const dist = DISTRICT[Math.round(Math.random() * (DISTRICT.length - 1))];

    return {
      id,
      name,
      pfpUrl: null,
      university: uni,
      age,
      job: 'Sinh viên',
      marriedStatus: 'Chưa kết hôn',
      district: dist,
      phone: '0123456789'
    };
  }
}
