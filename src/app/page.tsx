"use client";
import React from "react";

import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

const Page = () => {
  return (
    <>
      <RegisterLink>SignUp</RegisterLink>
      <LoginLink>Login</LoginLink>
    </>
  );
};

export default Page;
