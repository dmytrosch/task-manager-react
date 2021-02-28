import React, { useEffect } from "react";
import Auth from "../../components/authComponent/Auth";
import AuthLayout from "../../layouts/AuthLayout";

export default function SignupView() {
  useEffect(() => {
    document.title = "Реєстрація";
  }, []);
  return (
    <AuthLayout>
      <Auth />
    </AuthLayout>
  );
}
