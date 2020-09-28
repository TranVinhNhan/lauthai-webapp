import { IHistoryOrderDetail } from './history-orderDetail.inteface';

export interface IHistoryOrder {
  id: number;
  dateCreated: Date;
  customerFullname: string;
  customerPhone: string;
  meetingPlace: string;
  meetingDate: Date;
  option: string;
  orderDetails: IHistoryOrderDetail;
}
