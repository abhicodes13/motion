"use client";
import React from "react";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { redirect } from "next/navigation";
const page = () => {
  const { user, isAuthenticated } = useKindeBrowserClient();
  if (!isAuthenticated) {
    redirect("/");
  }
  return <div> Hello{user.given_name}</div>;
};

export default page;
