import React from "react";
import Auth from "../../components/authComponent/Auth";
import AuthLayout from "../../layouts/AuthLayout";

export default function LoginView() {
  return (
    <AuthLayout>
      <Auth />
    </AuthLayout>
  );
}
