import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Globle from "../../assets/css/globle.module.css";
import Aside from "../../assets/css/aside.module.css";
import Brand from "../../assets/images/Shivira_Stack_Logo.svg";
import navData from "./navData";
import { useSidebar } from "../../components/utilities/SidebarContext";

function AdminAside() {
    const [openDropdown, setOpenDropdown] = useState(null);
    const { isOpen, closeSidebar } = useSidebar(); // ✅ get open/close state from context

    const handleDropdownToggle = (index) => {
        setOpenDropdown((prev) => (prev === index ? null : index));
    };

    return (
        <>
            <div className={`${Globle.uiMainLayoutOverlay} ${isOpen ? Globle.uiMainLayoutOverlayActive : ""}`}></div>
            <aside
                className={`${Globle.uiMainAside} ${isOpen ? Globle.uiMainAsideActive : ""}`} >
                {/* Brand Logo */}
                <div className={Aside.uiAsideBrandBox}>
                    <Link to="/admin">
                        <img src={Brand} alt="Brand Logo" />
                    </Link>
                    <button type="button" onClick={closeSidebar} className={Aside.uiAsideCloseButton}>
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>

                {/* Navigation */}
                <div className={Aside.uiAsideNavBox}>
                    {navData.map((section, sectionIndex) => (
                        <div className={Aside.uiAsideNavSet} key={sectionIndex}>
                            {/* Section Title */}
                            <div className={Aside.uiAsideTitelWrap}>
                                <h6 className={Aside.uiAsideTitel}>{section.title}</h6>
                            </div>

                            {/* Section Items */}
                            <div className={Aside.uiAsideSetListWrap}>
                                <ul className={`nav flex-column ${Aside.uiAsideNav}`}>
                                    {section.items.map((item, itemIndex) => {
                                        if (item.type === "link") {
                                            return (
                                                <li className={`nav-item ${Aside.uiAsideNavItem}`} key={itemIndex}>
                                                    <NavLink
                                                        to={item.path}
                                                        className={({ isActive }) =>
                                                            `nav-link ${Aside.uiAsideNavLink} ${isActive ? Aside.uiActive : ""
                                                            }`
                                                        }
                                                    >
                                                        <div className={Aside.uiAsideList}>
                                                            <div className={Aside.uiAsideListContent}>
                                                                <div className={Aside.uiAsideListIcon}>
                                                                    <i className={item.icon}></i>
                                                                </div>
                                                                <span className={Aside.uiAsideListName}>
                                                                    {item.name}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </NavLink>
                                                </li>
                                            );
                                        }

                                        if (item.type === "dropdown") {
                                            const isDropdownOpen =
                                                openDropdown === `${sectionIndex}-${itemIndex}`;
                                            return (
                                                <li
                                                    className={`nav-item ${Aside.uiAsideNavItem}`}
                                                    key={itemIndex}
                                                >
                                                    {/* Dropdown Button */}
                                                    <button
                                                        type="button"
                                                        className={`nav-link ${Aside.uiAsideNavLink}`}
                                                        onClick={() =>
                                                            handleDropdownToggle(`${sectionIndex}-${itemIndex}`)
                                                        }
                                                    >
                                                        <div className={Aside.uiAsideList}>
                                                            <div className={Aside.uiAsideListContent}>
                                                                <div className={Aside.uiAsideListIcon}>
                                                                    <i className={item.icon}></i>
                                                                </div>
                                                                <span className={Aside.uiAsideListName}>
                                                                    {item.name}
                                                                </span>
                                                            </div>
                                                            <div className={Aside.uiAsideDropdownIcon}>
                                                                <i
                                                                    className={`fa-sharp fa-regular fa-chevron-${isDropdownOpen ? "down" : "right"
                                                                        }`}
                                                                ></i>
                                                            </div>
                                                        </div>
                                                    </button>

                                                    {/* Dropdown Menu */}
                                                    {isDropdownOpen && (
                                                        <ul className={`nav flex-column ${Aside.uiAsideNav}`}>
                                                            {item.children.map((child, childIndex) => (
                                                                <li
                                                                    className={`nav-item ${Aside.uiAsideNavItem}`}
                                                                    key={childIndex}
                                                                >
                                                                    <NavLink
                                                                        className={({ isActive }) =>
                                                                            `nav-link ${Aside.uiAsideNavLink} ${isActive ? Aside.uiActive : ""
                                                                            }`
                                                                        }
                                                                        to={child.path}
                                                                    >
                                                                        <div className={Aside.uiAsideList}>
                                                                            <div className={Aside.uiAsideListContent}>
                                                                                <div className={Aside.uiAsideListIcon}>
                                                                                    <i className={child.icon}></i>
                                                                                </div>
                                                                                <span className={Aside.uiAsideListName}>
                                                                                    {child.name}
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </NavLink>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </li>
                                            );
                                        }

                                        return null;
                                    })}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </aside>
        </>
    );
}

export default AdminAside;
