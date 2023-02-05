export default class XYZ {
  private xyzService: XyzService;

  private readonly purchaseOrder: PurchaseOrder;
  private prop = '';
  private abcService: ABCService;

  constructor(order: Order) {
    this.order = Order;
    this.xyzService = new XyzService();
    this.abcService = new ABCService();
  }

  public getProp() {
    return this.prop!;
  }
  public async init(status: Status): Promise<void> {
      //initialize order and assign properties
    and return properites;
  }

