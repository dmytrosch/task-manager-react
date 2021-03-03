import React from "react";
import Auth from "../../components/authComponent/Auth";
import AuthLayout from "../../layouts/AuthLayout";
import useTitle from "../../hooks/useTitle";

export default function LoginView() {
  useTitle("Вхід");
  return (
    <AuthLayout>
      <Auth />
    </AuthLayout>
  );
}
