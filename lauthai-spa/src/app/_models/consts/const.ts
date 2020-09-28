export class Const {
  public static readonly TABLE_ADMIN_COLUMN = [
    'id', 'name', 'pfpUrl', 'university','category', 'age', 'job', 'marriedStatus', 'district', 'phone', 'price', 'action'
  ];

  public static readonly TABLE_USER_COLUMN = [
    'select', 'id', 'name', 'pfpUrl', 'university','category', 'age', 'job', 'marriedStatus', 'district', 'phone', 'price', 'heart'
  ];

  public static readonly TABLE_ADMIN_FEEDBACK = [
    'id', 'name', 'feedbackTxt', 'contactEmail', 'dayCreated'
  ];

  public static readonly TABLE_CART = [
    'id', 'pfpUrl', 'name', 'phone', 'universityName','category', 'price', 'quantity', 'action'
  ];

  public static readonly CART = 'cart';
}
