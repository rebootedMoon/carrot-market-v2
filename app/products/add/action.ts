"use server";
import { z } from "zod";
import fs from "fs/promises";
import db from "@/lib/db";
import getSession from "@/lib/session";
import { redirect } from "next/navigation";

const productSchema = z.object({
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

export async function uploadProduct(_: any, formData: FormData) {
  const data = {
    photo: formData.get("photo"),
    title: formData.get("title"),
    price: formData.get("price"),
    description: formData.get("description"),
  };

  const results = productSchema.safeParse(data);
  if (!results.success) {
    return results.error.flatten();
  } else {
    const session = await getSession();
    if (session.id) {
      const product = await db.product.create({
        data: {
          photo: results.data.photo,
          title: results.data.title,
          price: results.data.price,
          description: results.data.description,
          user: {
            connect: {
              id: session.id,
            },
          },
        },
        select: {
          id: true,
        },
      });
      redirect(`/products/${product.id}`);
    }
  }
}

export async function getUploadUrl() {
  const response = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/images/v2/direct_upload`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.CLOUDFLARE_API_KEY}`,
      },
    }
  );
  const data = await response.json();
  console.log(data);
  return data;
}
