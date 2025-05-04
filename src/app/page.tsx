"use client";
import React from "react";
import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import { redirect } from "next/navigation";

const Page = () => {
  const { isAuthenticated } = useKindeAuth();
  if (!isAuthenticated) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-slate-200">
        <h1 className="text-2xl font-bold mb-1">Welcome to the ScrollRead</h1>
        <p className="mb-4">Please log in to access the content.</p>
        <div className="flex gap-2 mt-4">
          <LoginLink className="bg-black rounded-[5px] text-white  p-3 hover:opacity-75">
            Login
          </LoginLink>
          <RegisterLink className="bg-black rounded-[5px] text-white p-3 hover:opacity-75">
            Register
          </RegisterLink>
        </div>
      </div>
    );
  }
  redirect("/hello");
};

export default Page;
