import { z } from 'zod';

export const AccountSchema = z.object({
  responseCode: z.number(),
  user: z.object({
    id: z.number(),
    name: z.string(),
    email: z.string(),
    title: z.string(),
    birth_day: z.string(),
    birth_month: z.string(),
    birth_year: z.string(),
    first_name: z.string(),
    last_name: z.string(),
    company: z.string(),
    address1: z.string(),
    address2: z.string(),
    country: z.string(),
    state: z.string(),
    city: z.string(),
    zipcode: z.string(),
    mobile_number: z.string()
  })
});