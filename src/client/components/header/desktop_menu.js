import React, { useEffect, useState } from "react";
import Header from '../../assets/css/header.module.css';
import { NavLink } from "react-router-dom";
import navData from "./nav_data";
import { useMaintenanceMode } from "../../../utilities/maintenance_mode";

const clientPath = (path, isMaintenance) => isMaintenance ? `pages/${path}` : path;

function ClientDesktopMenu() {
  // Get maintenance mode from hook
  const [isMaintenance] = useMaintenanceMode();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [showscrolled, setShowscrolled] = useState(true);

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowscrolled(window.scrollY <= 44);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={Header.uiMenusContent}>
      <ul className={`nav justify-content-center ${Header.uiNav}`}>
        {navData.map((item, index) => {
          if (item.type === "link") {
            return (
              <li className={`nav-item ${Header.uiNavItem}`} key={index}>
                <NavLink
                  className={`nav-link ${Header.uiNavLink}`} to={clientPath(item.path, isMaintenance)}
                >
                  <div className={Header.uiNavLinkContent}>{item.label}</div>
                </NavLink>
              </li>
            );
          }

          if (item.type === "dropdown") {
            const isOpen = openDropdown === item.label;

            return (
              <li
                className={`nav-item ${Header.uiNavItem}`}
                key={index}
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
                onFocus={() => setOpenDropdown(item.label)}
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget)) {
                    setOpenDropdown(null);
                  }
                }}
              >
                <button
                  type="button"
                  className={`nav-link ${Header.uiNavLink} ${Header.uiDropdownButton} ${isOpen ? Header.uiActive : ""}`}
                  aria-haspopup="true"
                  aria-expanded={isOpen}
                >
                  <div className={Header.uiNavLinkContent}>{item.label}</div>
                  <div className={Header.uiDropdownIcon}>
                    <i className={`fa-sharp fa-regular ${ isOpen ? "fa-angle-up" : "fa-angle-down" }`}></i></div>
                </button>

                {isOpen && (
                  <div className={`${Header.uiMagaMenuDropdown} ${showscrolled ? "" : Header.uiScrollActive}`}>
                    <div className={Header.uiMagaDropdownBody}>
                      <div className="row">
                        <div className="col-12">
                          <ul className={`nav ${Header.uiNav}`}>
                            {item.items.map((sub, idx) => (
                              <li className={`nav-item ${Header.uiNavItem}`} key={idx}>
                                <NavLink
                                  className={`nav-link ${Header.uiNavLink}`}
                                  to={clientPath(sub.path, isMaintenance)}
                                  onClick={() => setOpenDropdown(null)}
                                >
                                  <div className={Header.uiNavLinkContent}>
                                    <div className={Header.uiNavLinkIcon}>
                                      <i className={sub.icon}></i>
                                    </div>
                                    <div className={Header.uiNavLinkinfo}>
                                      <h2 className={Header.uiNavLinkTitle}>{sub.label}</h2>
                                      <p className={Header.uiNavLinkText}>{sub.desc}</p>
                                    </div>
                                  </div>
                                </NavLink>
                              </li>
                            ))}

                            {item.ads?.map((ad, idx) => (
                              <li className={`nav-item ${Header.uiNavItem}`} key={`ad-${idx}`}>
                                <NavLink className={`nav-link ${Header.uiNavLinkAds}`} to={ad.path} onClick={() => setOpenDropdown(null)} >
                                  <div className={Header.uiNavLinkAdsContent}>
                                    <img src={ad.img} alt="" />
                                  </div>
                                </NavLink>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </li>
            );
          }

          return null;
        })}
      </ul>
    </div>
  );
}

export default ClientDesktopMenu;
