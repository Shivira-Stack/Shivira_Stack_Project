import React from "react";
import { Navigate } from "react-router-dom";

function AdminAuthCheck() {
  return <Navigate to="/admin" replace />;
}

export default AdminAuthCheck;