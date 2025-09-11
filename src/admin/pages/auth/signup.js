import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AdminSignUpForm from "../../sections/auth/signup_form";
const API_URL = process.env.REACT_APP_API_URL;

function AdminSignUp() {
  const navigate = useNavigate();

  useEffect(() => {
    const checkTable = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/auth/check-table`);
        if (res.data.hasData) {
          // If table has data, go to signin
          navigate("/auth/signin");
        }
      } catch (err) {
        console.error("API error:", err);
      }
    };

    checkTable();
  }, [navigate]);

  return (
    <>
      <AdminSignUpForm />
    </>
  );
}

export default AdminSignUp;
