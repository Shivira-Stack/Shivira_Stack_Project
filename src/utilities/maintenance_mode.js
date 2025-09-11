import { useState, useEffect } from "react";

export const valueUpdate = true;

export function useMaintenanceMode(defaultValue = false) {
  const [isMaintenance, setIsMaintenance] = useState(() => {
    const stored = localStorage.getItem("IsMaintenance");
    if (stored === null) {
      localStorage.setItem("IsMaintenance", valueUpdate ? "true" : defaultValue ? "true" : "false");
      return valueUpdate ? true : defaultValue;
    }
    return stored === "true";
  });

  useEffect(() => {
    localStorage.setItem("IsMaintenance", isMaintenance ? "true" : "false");
  }, [isMaintenance]);

  useEffect(() => {
    const handleStorage = () => {
      const stored = localStorage.getItem("IsMaintenance");
      setIsMaintenance(stored === "true");
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  useEffect(() => {
    setIsMaintenance(valueUpdate);
  }, [valueUpdate]);

  const updateMode = (value) => {
    setIsMaintenance(value);
  };

  const resetMode = () => {
    setIsMaintenance(defaultValue);
  };

  return [isMaintenance, updateMode, resetMode];
}
