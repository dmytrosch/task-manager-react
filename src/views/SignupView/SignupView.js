import React from "react";
import useTitle from "../../hooks/useTitle";
import AuthLayout from "../../layouts/AuthLayout";
import Signup from "../../components/authComponent/Signup";

export default function SignupView() {
  useTitle("Реєстрація");
  return (
    <AuthLayout>
      <Signup />
    </AuthLayout>
  );
}
