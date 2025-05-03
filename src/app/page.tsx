"use client";
import React from "react";
import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";

import Read from "./components/Read";
import { redirect } from "next/navigation";

const Page = () => {
  const { isAuthenticated } = useKindeAuth();
  if (!isAuthenticated) {
    redirect("https://scrollread.vercel.app/api/auth/login");
  }
  return (
    <>
      <Read />
    </>
  );
};

export default Page;
