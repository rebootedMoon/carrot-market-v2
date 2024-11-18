"use client";
import Button from "@/components/button";
import Input from "@/components/input";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { uploadProduct } from "./action";

export default function AddProduct() {
  const [preview, setPreview] = useState("");
  const onImageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const {
      target: { files },
    } = event;
    if (!files) {
      return;
    }
    const file = files[0];
    const url = URL.createObjectURL(file);
    console.log(url);
    setPreview(url);
  };
  return (
    <div>
      <form
        action={uploadProduct}
        className="p-5 flex flex-col gap-2"
      >
        <label
          htmlFor="photo"
          className="border-2 aspect-square flex flex-col items-center justify-center text-neutral-300 border-neutral-300 
          rounded-md border-dashed cursor-pointer bg-center bg-coverå"
          style={{ backgroundImage: `url(${preview})` }}
        >
          {preview === "" ? (
            <>
              <PhotoIcon className="w-20" />
              <div className="text-neutral-400 text-sm">
                사진을 추가해 주세요.
              </div>
            </>
          ) : null}
        </label>
        <input
          onChange={onImageChange}
          type="file"
          id="photo"
          name="photo"
          className="hidden"
        />
        <Input name="title" type="text" required placeholder="제목" />
        <Input
          name="price"
          type="number"
          required
          placeholder="가격"
        />
        <Input
          name="description"
          type="text"
          required
          placeholder="자세한 설명"
        />
        <Button text="작성 완료" />
      </form>
    </div>
  );
}
