import React from "react";
import MainLayout from "../../layouts/MainLayout";
import Dashboard from "../../components/Dashboard/Dashboard";
import useTitle from "../../hooks/useTitle";

export default function MainView() {
  useTitle("Проєкти")
  return (
    <MainLayout>
      <Dashboard />
    </MainLayout>
  );
}
