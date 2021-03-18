import React from "react";
import ResetPassword from "../../components/authComponent/authAssets/CreatingNewPassword";
import useTitle from "../../hooks/useTitle";
import AuthLayout from "../../layouts/AuthLayout";

export default function ResetPasswordView() {
  useTitle("Відновлення доступу");
  return (
    <AuthLayout>
      <ResetPassword />
    </AuthLayout>
  );
}
