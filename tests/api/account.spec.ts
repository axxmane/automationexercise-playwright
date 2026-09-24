import { test, expect } from '../../src/fixtures/test-fxtures';

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