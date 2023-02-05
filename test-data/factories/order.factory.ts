export default class abcFactory {
  public static async generate(status:Status): Promise<Order> {
    switch (status) {
      case status.statusOne:
        return abcFactory.generatestatusOne(bar);
      case status.statusTwo:
        return abcFactory.generatestatusTwo(bar);
      default:
        throw Error('Invalid status given.');
    }
  }

  private static async generateActiveContract(bar: Bar): Promise<Contract> {
    create order and return
    
    }
    }
