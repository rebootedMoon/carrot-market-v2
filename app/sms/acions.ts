"use server";

import { z } from "zod";
import validator from "validator";

const phoneSchema = z
  .string()
  .trim()
  .refine(validator.isMobilePhone);
const tokenSchma = z.coerce
  .number()
  .min(100000)
  .max(999999);

export async function smsVerification(
  prevState: any,
  formData: FormData
) {
  console.log(typeof formData.get("token"));
  console.log(
    typeof tokenSchma.parse(formData.get("token"))
  );
}
