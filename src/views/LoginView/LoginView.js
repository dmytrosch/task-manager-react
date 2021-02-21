import React from "react";
import Login from "../../components/authComponent/Login";
import AuthLayout from "../../components/Layouts/AuthLayout";

export default function LoginView() {
  return (
    <AuthLayout>
      <Login />
    </AuthLayout>
  );
}
