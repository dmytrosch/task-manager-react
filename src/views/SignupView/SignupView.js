import React from "react";
import Signup from "../../components/authComponent/Signup";
import AuthLayout from "../../layouts/AuthLayout";

export default function SignupView() {
  return (
    <AuthLayout>
      <Signup />
    </AuthLayout>
  );
}
