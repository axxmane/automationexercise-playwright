import dotenv from 'dotenv';

dotenv.config();

interface AppConfig {
  environment: string;
  webUrl: string;
  apiUrl: string;
  testUserPassword: string;
}

function requiredEnv(name: string): string {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

export const config: AppConfig = {
  environment: process.env.APP_ENV ?? 'dev',
  webUrl: requiredEnv('WEB_URL'),
  apiUrl: requiredEnv('API_URL'),
  testUserPassword: requiredEnv('TEST_USER_PASSWORD')
};