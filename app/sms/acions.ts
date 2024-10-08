"use server";

import { z } from "zod";
import validator from "validator";
import { redirect } from "next/navigation";

const phoneSchema = z
  .string()
  .trim()
  .refine(
    (phone) => validator.isMobilePhone(phone, "ko-KR"),
    "Wrong phone format"
  );
const tokenSchma = z.coerce
  .number()
  .min(100000)
  .max(999999);

interface ActionState {
  token: boolean;
}
export async function smsLogin(
  prevState: ActionState,
  formData: FormData
) {
  const phone = formData.get("phone");
  const token = formData.get("token");
  if (!prevState.token) {
    const result = phoneSchema.safeParse(phone);
    if (!result.success) {
      console.log("false");
      return {
        token: false,
        error: result.error.flatten(),
      };
    } else {
      console.log("true");
      return {
        token: true,
      };
    }
  } else {
    const result = tokenSchma.safeParse(token);
    if (!result.success) {
      return {
        token: true,
        error: result.error.flatten(),
      };
    } else {
      redirect("/");
    }
  }
}
