import React from "react";
import ResetPassword from "../../components/authComponent/createNewPassword";
import AuthLayout from "../../layouts/AuthLayout";

export default function ResetPasswordView() {
  return (
    <AuthLayout>
      <ResetPassword />
    </AuthLayout>
  );
}
