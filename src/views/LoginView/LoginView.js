import React from "react";
import Login from "../../components/authComponent/Login";
import AuthLayout from "../../layouts/AuthLayout";

export default function LoginView() {
  return (
    <AuthLayout>
      <Login />
    </AuthLayout>
  );
}
