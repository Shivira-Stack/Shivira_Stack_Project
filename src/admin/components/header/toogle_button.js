import React from "react";
import Header from "../../assets/css/header.module.css";
import { useSidebar } from "../utilities/SidebarContext";


function AdminToggleButton() {
  const { isOpen, toggleSidebar } = useSidebar();

  return (
    <button
      type="button"
      className={Header.uiHeaderButton}
      onClick={toggleSidebar}
    >
      <i className={isOpen ? "fa-sharp fa-regular fa-bars-staggered" : "fa-sharp fa-regular fa-bars"}></i>
    </button>
  );
}

export default AdminToggleButton;
