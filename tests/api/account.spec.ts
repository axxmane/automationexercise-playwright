import { test, expect } from '../../src/fixtures/test-fxtures';
import { AccountSchema } from '../../src/api/schemas/account.schema';
test.describe('Account API', () => {

  test('user CRUD should work correctly', async ({
    accountApi,
    testUser
  }) => {

    const getResponse = await accountApi.getAccount(
      testUser.email
    );

    expect(getResponse.status()).toBe(200);

    const getBody = await getResponse.json();
    AccountSchema.parse(getBody);
    expect(getBody.responseCode).toBe(200);

    expect(getBody.user.email).toBe(
      testUser.email
    );

    const updateResponse =
      await accountApi.updateAccount(testUser);

    expect(updateResponse.status()).toBe(200);

    const updateBody =
      await updateResponse.json();

    expect(updateBody.responseCode).toBe(200);
  });

});