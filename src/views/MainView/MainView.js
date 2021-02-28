import React, { useEffect } from "react";
import MainLayout from "../../layouts/MainLayout";
import Dashboard from "../../components/Dashboard/Dashboard";

export default function MainView() {
  useEffect(() => {
    document.title = "Проєкти";
  }, []);
  return (
    <MainLayout>
      <Dashboard />
    </MainLayout>
  );
}
