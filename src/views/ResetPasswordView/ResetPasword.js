import React, {useEffect} from "react";
import ResetPassword from "../../components/authComponent/authAssets/CreatingNewPassword";
import AuthLayout from "../../layouts/AuthLayout";

export default function ResetPasswordView() {
  useEffect(() => {
    document.title = "Відновлення доступу";
  }, []);
  return (
    <AuthLayout>
      <ResetPassword />
    </AuthLayout>
  );
}
