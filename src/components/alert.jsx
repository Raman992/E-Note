import React from "react";
import { useAlert } from "../context/AlertContext";
import './CSS/alert.css';

const Alert = () => {
  const { alert } = useAlert();

  if (!alert) return null;

  const { message, type } = alert;

  const alertTypeClass = {
    success: "alert-success",
    error: "alert-error",
    warning: "alert-warning",
    info: "alert-info",
  }[type] || "alert-default";

  return (
    <div className={`alert ${alertTypeClass}`}>
      {message}
    </div>
  );
};

export default Alert;