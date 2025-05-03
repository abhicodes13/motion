"use client";
import React from "react";
import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";

import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import Read from "./components/Read";

const Page = () => {
  const { isAuthenticated } = useKindeAuth();
  if (!isAuthenticated) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold mb-4">Welcome to the Home Page</h1>
        <p className="mb-4">Please log in to access the content.</p>
        <LoginLink className="bg-black p-2 text-white mb-5">Login</LoginLink>
        <RegisterLink className="bg-black p-2 text-white">
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
