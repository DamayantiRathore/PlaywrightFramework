import xyz service';

const response: any = global;
const xyz = new xyzService();

beforeAll(async function () {
  console.log('=======Test ID:=======');
  console.log(`${process.env.TEST_ID}`);
  console.log('======================');
});

afterAll(async function () {
  const response = {
    creationStatus: 'FAILED',
    references: [] as any,
    expiresAfter: '' as string,
  };
  if (response.reference) {
    response.creationStatus = 'SUCCESS';
    response.references = response.reference;
    response.expiresAfter = xyzService.setExpireAfter(336, 0);
  } else if (response.staticTestDataCreation) {
    tdsResponse.creationStatus = 'SUCCESS';
  }
  await xyz.callback(process.env.DATASET_ID!, response);
});
