import React from "react";
import Auth from "../../components/authComponent/Auth";
import useTitle from "../../hooks/useTitle";
import AuthLayout from "../../layouts/AuthLayout";

export default function SignupView() {
  useTitle("Реєстрація");
  return (
    <AuthLayout>
      <Auth />
    </AuthLayout>
  );
}
