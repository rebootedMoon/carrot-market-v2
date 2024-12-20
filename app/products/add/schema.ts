import { z } from "zod";
export const productSchema = z.object({
  photo: z.string({
    required_error: "Photo is required",
  }),
  title: z
    .string({
      required_error: "Title is required",
    })
    .min(5)
    .max(10),
  description: z.string({
    required_error: "Description is required",
  }),
  price: z.coerce.number({
    required_error: "Price is required",
  }),
});
