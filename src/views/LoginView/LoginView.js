import React, { useEffect } from "react";
import Auth from "../../components/authComponent/Auth";
import AuthLayout from "../../layouts/AuthLayout";

export default function LoginView() {
  useEffect(() => {
    document.title = "Вхід";
  }, []);
  return (
    <AuthLayout>
      <Auth />
    </AuthLayout>
  );
}
