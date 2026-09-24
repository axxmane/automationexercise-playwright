import { config } from '../api/config/config';
import { TestUser } from '../api/clients/account-api';

function generateUniqueEmail(): string {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 10000);

  return `playwright.qa.${timestamp}.${random}@example.com`;
}

export function createTestUser(): TestUser {
  return {
    name: `Playwright User ${Date.now()}`,
    email: generateUniqueEmail(),
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