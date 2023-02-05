const response: any = global;
describe('Create data for', function () {
  let xyz: XYZ;
  const rawData: Data = {
    accountNumber: XXXXXX,
    contry: 'India',
    userName: 'XYZ',
  };
  it('firstitblock', async function () {
    const data: Data = await xyzFactory.generate(Type.DIRECT, rawData);
    const data: xyzProperties = {
      saomeProp: ABC,
    };
    order = await xyzFactory.generate(Bar.State, data);
  });
    afterEach(async function () {
    response.reference = [{externalId: oder.getorderNumber(), type: 'order'}];
  });
});
