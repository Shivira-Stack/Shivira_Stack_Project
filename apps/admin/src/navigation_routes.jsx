import { lazy, Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

// const Home = lazy(() => import("../pages/Home"));
const AuthLayout = lazy(() => import("./layouts/auth_layout"));
const MainLayout = lazy(() => import("./layouts/main_layout"));
const ErrorLayout = lazy(() => import("./layouts/error_layout"));

function Main() {

  return (
    <>
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path='/auth' element={<AuthLayout />}>
                    <Route path="login" index element={<h1>login</h1>} />
                </Route>
                <Route path='/' element={<MainLayout />}>
                    <Route path="dashboard" element={<h1>dashboard</h1>} />
                </Route>

                <Route path="*" element={<ErrorLayout><h1>Page Not Found</h1></ErrorLayout>} />

            </Routes>
        </Suspense>
        </BrowserRouter>
    </>
  )
}

export default Main;
