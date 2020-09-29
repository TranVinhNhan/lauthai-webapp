import { IOrderDetail } from './order-detail.interface';

export interface IOrder {
  customerFullname: string;
  customerPhone: string;
  meetingDate: string;
  meetingPlace: string;
  option?: string;
  orderDetails: IOrderDetail[];
}
