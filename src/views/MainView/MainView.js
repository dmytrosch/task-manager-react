import React from "react";
import MainLayout from "../../components/Layouts/MainLayout";
import Dashboard from "../../components/Dashboard/Dashboard";

export default function MainView() {
  return (
    <MainLayout>
      <div>
        <Dashboard />
      </div>
    </MainLayout>
  );
}
