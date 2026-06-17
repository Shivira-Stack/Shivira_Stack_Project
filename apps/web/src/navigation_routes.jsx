import { lazy, Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Routes, Route, BrowserRouter } from "react-router-dom";

// const Home = lazy(() => import("../pages/Home"));
const AuthLayout = lazy(() => import("./layouts/auth_layout"));
const SignIn = lazy(() => import("./pages/auth/sign_in"));

const MainLayout = lazy(() => import("./layouts/main_layout"));
const ErrorLayout = lazy(() => import("./layouts/error_layout"));

function Main() {

    return (
        <>
            <HelmetProvider>
                <BrowserRouter>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Routes>
                            <Route path='/auth' element={<AuthLayout />}>
                                <Route path="sign_in" index element={<SignIn />} />
                            </Route>
                            <Route path='/' element={<MainLayout />}>
                                <Route index element={<h1>Home</h1>} />
                            </Route>

                            <Route path="*" element={<ErrorLayout><h1>Page Not Found</h1></ErrorLayout>} />

                        </Routes>
                    </Suspense>
                </BrowserRouter>
            </HelmetProvider>
        </>
    )
}

export default Main;
