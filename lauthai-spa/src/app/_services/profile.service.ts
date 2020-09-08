import { Injectable } from '@angular/core';
import { IProfile } from '../_interfaces/profile.interface';

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

const PFPURL: string[] = [
  'https://danongonline.com.vn/wp-content/uploads/2018/02/anh-girl-xinh-9-1.jpg',
  'https://2.bp.blogspot.com/-fjf5yU5r1Jk/WE1VD1BBKpI/AAAAAAAAjgI/bXwGoigAPJYvScMPtzJtzbOJfoGQO2C_ACEw/s1600/15349541_533868826819201_3350340522319981193_n.jpg',
  'https://phunugioi.com/wp-content/uploads/2020/04/anh-gai-xinh-2000-de-thuong.jpg',
  'https://4.bp.blogspot.com/-983QtP5mKzY/WyEd9tw7lYI/AAAAAAAAwPA/hHxSPxoXZUMbfn8bYZbFhJzsRUrFOzsygCLcBGAs/s640/anh-girl-xinh-chon-loc-1.jpg',
  'https://sohanews.sohacdn.com/2020/2/26/photo-1-158270587240769675748.jpg',
  'https://thuthuatnhanh.com/wp-content/uploads/2019/12/hinh-anh-gai-xinh-de-thuong-2.jpg',
  'https://danongonline.com.vn/wp-content/uploads/2018/02/anh-girl-xinh-ha-noi-6.jpg',
  'https://cdn.24h.com.vn/upload/2-2019/images/2019-04-19/1555668648-429-ppppppppppp-1555668639-width650height813.jpg',
  'https://congngheads.com/media/images/anh-dep/hinh-nen-dep-2016-1559616366/bo-anh-gai-xinh-ao-do-dang-la-luot-tren-phim-dan-lam-hinh-nen-20-07-2019-1.jpg',
  'https://i.pinimg.com/236x/0d/7d/b0/0d7db08b7a4a5e31c2f8bfb353b0a882.jpg',
  'https://i.pinimg.com/564x/3c/dd/56/3cdd56556aaf558988e225c312d34e97.jpg',
  'https://congngheads.com/media/images/anh-dep/hinh-nen-android-dep-1559622870/anh-gai-xinh-mac-kimono-hong-duyen-dang-04-08-2019-2.jpg'
]

@Injectable({
  providedIn: 'root'
})

export class ProfileService {
  getProfiles(qty: number): IProfile[] {
    return Array.from({ length: qty }, (_, i) => this.createNewProfile(i + 1));
  }

  private createNewProfile(id: number): IProfile {
    const name =
      SURNAMES[Math.round(Math.random() * (SURNAMES.length - 1))] +
      ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))];

    const uni = UNI[Math.round(Math.random() * (UNI.length - 1))];

    const age = AGE[Math.round(Math.random() * (AGE.length - 1))];

    const dist = DISTRICT[Math.round(Math.random() * (DISTRICT.length - 1))];

    const url = PFPURL[Math.round(Math.random() * (PFPURL.length - 1))];

    return {
      id,
      name,
      pfpUrl: url,
      university: uni,
      age,
      job: 'Sinh viên',
      marriedStatus: 'Chưa kết hôn',
      district: dist,
      phone: '0123456789'
    };
  }
}
