import React from "react";
import ResetPassword from "../../components/authComponent/createNewPassword";
import AuthLayout from "../../components/Layouts/AuthLayout";

export default function ResetPasswordView() {
  return (
    <AuthLayout>
      <ResetPassword />
    </AuthLayout>
  );
}
