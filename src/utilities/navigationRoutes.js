import React, { Suspense, lazy, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useMaintenanceMode } from "./maintenance_mode";
const ClientPreloder = lazy(() => import("./preloder"));
const ClientDeviceScreen = lazy(() => import("../error_pages/device_screen"));

// Client imports
const ClientMainLayout = lazy(() => import("../client/layout/main_layout"));
const ClientHome = lazy(() => import("../client/pages/home"));
const ClientAbout = lazy(() => import("../client/pages/about"));
const ClientPortfolio = lazy(() => import("../client/pages/portfolio"));
const ClientBlog = lazy(() => import("../client/pages/blog"));
const ClientContact = lazy(() => import("../client/pages/contact"));
const ClientBookingAppointment = lazy(() => import("../client/pages/booking_appointment"));
const ClientLegalDynamic = lazy(() => import("../client/pages/legal_dynamic"));

// Admin imports
const AdminAuthLayout = lazy(() => import("../admin/layouts/auth_layout"));
const AdminSignIn = lazy(() => import("../admin/pages/auth/signin"));
const AdminSignUp = lazy(() => import("../admin/pages/auth/signup"));
const AdminForgetPassword = lazy(() => import("../admin/pages/auth/forgetpassword"));
const AdminVerification = lazy(() => import("../admin/pages/auth/verification"));
const AdminNewPassword = lazy(() => import("../admin/pages/auth/new_password"));
const AdminMainLayout = lazy(() => import("../admin/layouts/main_layout"));

// Fallback imports
const ClientUnauthorized = lazy(() => import("../error_pages/unauthorized"));
const ClientForbidden = lazy(() => import("../error_pages/forbidden"));
const ClientNotFound = lazy(() => import("../error_pages/not_found"));
const ClientInternalServerError = lazy(() => import("../error_pages/internal_server_error"));
const ClientBadGateway = lazy(() => import("../error_pages/bad_gateway"));
const ClientMaintenance = lazy(() => import("../error_pages/maintenance"));
const ClientGatewayTimeout = lazy(() => import("../error_pages/gateway_timeout"));

// -------- Toggle Maintenance Mode --------
const clientPath = (path, isMaintenance) => isMaintenance ? `pages/${path}` : path;

function NavigationRoutes() {
  const [isMaintenance] = useMaintenanceMode();
  const [isTooSmall, setIsTooSmall] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsTooSmall(window.innerWidth <= 319);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  if (isTooSmall) {
    return <ClientDeviceScreen />;
  }

  return (
    <BrowserRouter>
      <Suspense fallback={<ClientPreloder />}>
        <Routes key={isMaintenance ? "maintenance" : "normal"}>
          {/* -------- Client Routes -------- */}
          <Route path="/" element={<ClientMainLayout />}>
            <Route index element={isMaintenance ? <Navigate to="/maintenance" replace /> : <ClientHome />} />
            <Route path={clientPath("home", isMaintenance)} element={<ClientHome />} />
            <Route path={clientPath("about_us", isMaintenance)} element={<ClientAbout />} />
            <Route path={clientPath("services", isMaintenance)} element={<div>Services</div>} />
            <Route path={clientPath("portfolio", isMaintenance)} element={<ClientPortfolio />} />
            <Route path={clientPath("blog", isMaintenance)} element={<ClientBlog />} />
            <Route path={clientPath("careers", isMaintenance)} element={<div>Careers</div>} />
            <Route path={clientPath("contact_us", isMaintenance)} element={<ClientContact />} />
            <Route path={clientPath("booking_appointment", isMaintenance)} element={<ClientBookingAppointment />} />
            <Route path={clientPath("terms", isMaintenance)} element={<ClientLegalDynamic />} />
            <Route path={clientPath("policy", isMaintenance)} element={<ClientLegalDynamic />} />
            <Route path={clientPath("refund", isMaintenance)} element={<ClientLegalDynamic />} />
          </Route>

          {/* -------- Admin Routes -------- */}
          <Route path="/auth" element={<AdminAuthLayout />}>
            <Route index element={<AdminSignIn />} />
            <Route path="signup" element={<AdminSignUp />} />
            <Route path="forget_password" element={<AdminForgetPassword />} />
            <Route path="verification" element={<AdminVerification />} />
            <Route path="new_password" element={<AdminNewPassword />} />
          </Route>

          <Route path="/admin" element={<AdminMainLayout />}>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<div>Dashboard</div>} />
          </Route>

          {/* -------- Fallback Routes -------- */}
          <Route path="*" element={<Navigate to="/page_not_found" replace />} />
          <Route path="/unauthorized" element={<ClientUnauthorized />} />
          <Route path="/page_not_found" element={<ClientForbidden />} />
          <Route path="/error-404" element={<ClientNotFound />} />
          <Route path="/error-500" element={<ClientInternalServerError />} />
          <Route path="/error-502" element={<ClientBadGateway />} />
          <Route path="/maintenance" element={<ClientMaintenance />} />
          <Route path="/error-504" element={<ClientGatewayTimeout />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default NavigationRoutes;
