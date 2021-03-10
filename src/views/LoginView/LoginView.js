import React from "react";
import LoginWraper from "../../components/authComponent/LoginWraper";
import AuthLayout from "../../layouts/AuthLayout";
import useTitle from "../../hooks/useTitle";

export default function LoginView() {
  useTitle("Вхід");
  return (
    <AuthLayout>
      <LoginWraper />
    </AuthLayout>
  );
}
