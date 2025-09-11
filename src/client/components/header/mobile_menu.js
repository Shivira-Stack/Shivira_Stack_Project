import React, { useState, useEffect } from "react";
import Header from '../../assets/css/header.module.css';
import { NavLink } from "react-router-dom";
import navData from "./nav_data";
import { useMaintenanceMode } from "../../../utilities/maintenance_mode";

const clientPath = (path, isMaintenance) => isMaintenance ? `pages/${path}` : path;

function ClientMobileMenu() {
  const [isMaintenance] = useMaintenanceMode();
  const [isMenuActive, setIsMenuActive] = useState(
    localStorage.getItem("MenuIS") === "true"
  );
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  useEffect(() => {
    // Update state if localStorage value changes
    const handleStorageChange = () => {
      setIsMenuActive(localStorage.getItem("MenuIS") === "true");
    };

    window.addEventListener("storage", handleStorageChange);

    // Custom event inside same tab
    const handleCustomEvent = () => {
      setIsMenuActive(localStorage.getItem("MenuIS") === "true");
    };
    window.addEventListener("menuToggle", handleCustomEvent);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("menuToggle", handleCustomEvent);
    };
  }, []);

  return (
    <div className={`${Header.uiMobileNavWrap} ${isMenuActive ? Header.uiMobileNavActive  : ""}`}>
      <div className={Header.uiMobileNav}>
        <div className={Header.uiMobileNavTop}>
          <div className={Header.uiMobileAction}>
            <button
              type="button"
              className={Header.uiMobileClose}
              onClick={() => {
                localStorage.setItem("MenuIS", "false");
                setIsMenuActive(false);
                window.dispatchEvent(new Event("menuToggle"));
              }}
            >
              <i className="fa-sharp fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>

        <div className={Header.uiMenusContent}>
          <ul className={`nav flex-column ${Header.uiNav}`}>
            {navData.map((item, index) => {
              if (item.type === "link") {
                return (
                  <li className={`nav-item ${Header.uiNavItem}`} key={index}>
                    <NavLink className={`nav-link ${Header.uiNavLink}`} to={clientPath(item.path, isMaintenance)}>
                      <div className={Header.uiNavLinkContent}>{item.label}</div>
                    </NavLink>
                  </li>
                );
              }

              if (item.type === "dropdown") {
                const isOpen = openDropdown === item.label;
                return (
                  <li className={`nav-item ${Header.uiNavItem}`} key={index}>
                    <button
                      type="button"
                      className={`nav-link ${Header.uiNavLink} ${Header.uiDropdownButton} ${
                        isOpen ? Header.uiActive : ""
                      }`}
                      onClick={() => toggleDropdown(item.label)}
                    >
                      <div className={Header.uiNavLinkContent}>{item.label}</div>
                      <div className={Header.uiNavLinkIcon}>
                        <i
                          className={`fa-sharp fa-regular ${
                            isOpen ? "fa-angle-down" : "fa-angle-right"
                          }`}
                        ></i>
                      </div>
                    </button>

                    {isOpen && (
                      <div className={Header.uiMenuDropdown}>
                        <ul className={`nav flex-column ${Header.uiNav}`}>
                          {item.items.map((sub, idx) => (
                            <li className={`nav-item ${Header.uiNavItem}`} key={idx}>
                              <NavLink className={`nav-link ${Header.uiNavLink}`} to={clientPath(sub.path, isMaintenance)}>
                                <div className={Header.uiNavLinkContent}>
                                  <div className={Header.uiNavLinkIcon}>
                                    <i className={sub.icon}></i>
                                  </div>
                                  {sub.label}
                                </div>
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                );
              }

              return null;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ClientMobileMenu;
