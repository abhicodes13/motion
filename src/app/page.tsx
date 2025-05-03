"use client";
import React from "react";
import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";

import Read from "./components/Read";

const Page = () => {
  const { isAuthenticated } = useKindeAuth();
  if (!isAuthenticated) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold mb-4">Welcome to the Home Page</h1>
        <p className="mb-4">Please log in to access the content.</p>
        <LoginLink className="bg-black rounded-[5px] text-white px-2">
          Login
        </LoginLink>
        <RegisterLink className="bg-black rounded-[5px] text-white px-2">
          Register
        </RegisterLink>
      </div>
    );
  }
  return (
    <>
      <Read />
    </>
  );
};

export default Page;
