import React from "react";
import LoadingMask from "react-loadingmask";
import "react-loadingmask/dist/react-loadingmask.css";

export default function Loader({ children, loading }) {
  return (
    <LoadingMask loading={loading}>
      <div style={{ width: "100%", height: "100%" }}>{children}</div>
    </LoadingMask>
  );
}
