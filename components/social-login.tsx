import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function SocialLogin() {
  return (
    <>
      <div className="w-full h-px bg-neutral-500" />
      <div>
        <Link
          className="primary-btn  flex items-center justify-center gap-3 p-2.5"
          href="/sms"
        >
          <span>
            <ChatBubbleOvalLeftEllipsisIcon className="size-6" />
          </span>
          <span> Sign up with SMS</span>
        </Link>
      </div>
    </>
  );
}
