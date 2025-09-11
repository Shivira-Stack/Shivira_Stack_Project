import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL;

export function useSessionChecker() {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // null = loading
  const navigate = useNavigate();

  useEffect(() => {
    async function verifySession() {
      try {
        const res = await fetch(`${API_URL}/api/auth/session`, {
          method: "GET",
          credentials: "include",
        });

        if (!res.ok) {
          handleLogout();
          return;
        }

        const data = await res.json();

        if (data.user) {
          // ✅ Sync localStorage with server session
          const storedEmail = localStorage.getItem("LoginIs");
          if (storedEmail !== data.user.email) {
            localStorage.setItem("LoginIs", data.user.email);
          }

          // ✅ Check user status
          if (data.user.status !== "active") {
            handleUnauthorized();
          } else {
            setIsAuthenticated(true);
          }
        } else {
          handleLogout();
        }
      } catch (err) {
        console.error("Session check failed:", err);
        handleLogout();
      }
    }

    function handleLogout() {
      localStorage.removeItem("LoginIs");
      setIsAuthenticated(false);
      navigate("/auth");
    }

    function handleUnauthorized() {
      localStorage.removeItem("LoginIs");
      setIsAuthenticated(false);
      navigate("/unauthorized", {
        state: {
          title: "Account Access Restricted",
          desc: "It looks like your account is inactive or has been suspended. Please contact the Super Admin to regain access.",
          buttonPath: "/",
          buttonName: "Go To Home",
        },
      });
    }

    verifySession();
    const interval = setInterval(verifySession, 30 * 1000);
    return () => clearInterval(interval);
  }, [navigate]);

  return isAuthenticated;
}
