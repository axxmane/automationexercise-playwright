import { z } from 'zod';

export const ProductSchema = z.object({
  id: z.number(),
  name: z.string(),
  price: z.string(),
  brand: z.string(),
  category: z.object({
    usertype: z.object({
      usertype: z.string()
    }),
    category: z.string()
  })
});

export const ProductsResponseSchema = z.object({
  responseCode: z.number(),
  products: z.array(ProductSchema)
});