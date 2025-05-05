import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center mt-20 ">
      <h1 className="text-3xl mb-10">
        The page you're looking for doesn't exist
      </h1>
      <Link
        href={"/"}
        className="p-2 bg-black text-white rounded-xl  hover:opacity-60 "
      >
        Go back
      </Link>
    </div>
  );
}
