import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AdminSignInForm from "../../sections/auth/signin_form";
const API_URL = process.env.REACT_APP_API_URL;

function AdminSignIn() {
  const navigate = useNavigate();

  useEffect(() => {
    const checkTable = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/auth/check-table`);

        if (res.data.hasData === false) {
          // No user → redirect to signup
          navigate("/auth/signup");
        }
      } catch (err) {
        console.error("Error checking table:", err);
      }
    };

    checkTable();
  }, [navigate]);

  return (
    <>
      <AdminSignInForm />
    </>
  );
}

export default AdminSignIn;
