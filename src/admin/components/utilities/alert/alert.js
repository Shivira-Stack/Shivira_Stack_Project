import React, { useEffect, useState } from "react";
import Globle from "../../../assets/css/globle.module.css";
import { registerAlertHandler } from "./alert_data";

function AdminAlert() {
  const [alert, setAlert] = useState(null);
  const [visible, setVisible] = useState(false);

  const alertTypes = {
    info: Globle.uiAlertInfo,
    success: Globle.uiAlertSuccess,
    warning: Globle.uiAlertWarning,
    danger: Globle.uiAlertDanger,
  };

  useEffect(() => {
    registerAlertHandler((newAlert) => {
      if (!newAlert) return;

      setAlert(newAlert);
      setVisible(true);

      setTimeout(() => {
        setVisible(false);

        setTimeout(() => {
          setAlert(null);
          if (typeof newAlert.completed === "function") {
            newAlert.completed();
          }
        }, 300);
      }, 3000);
    });
  }, []);

  if (!alert) return null;

  return (
    <div
      className={`${Globle.uiAlert} ${alertTypes[alert.type]}`}>
      <div className={Globle.uiAlertContent}>
        <span>{alert.message}</span>
      </div>
    </div>
  );
}

export default AdminAlert;
