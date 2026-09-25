import { config } from '../api/config/config';
import { TestUser } from '../api/clients/account-api';

export function createTestUser(workerIndex = 0): TestUser {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 10000);

  const uniqueId = `${workerIndex}-${timestamp}-${random}`;

  return {
    name: `Playwright User ${uniqueId}`,
    email: `playwright.qa.${uniqueId}@example.com`,
    password: config.testUserPassword,
    title: 'Mr',

    birth_date: '10',
    birth_month: '5',
    birth_year: '1998',

    firstname: 'Playwright',
    lastname: 'Tester',

    company: 'QA Automation',

    address1: 'Automation Street',
    address2: 'Building 1',

    country: 'Canada',

    zipcode: '12345',

    state: 'Ontario',

    city: 'Toronto',

    mobile_number: '1234567890'
  };
}