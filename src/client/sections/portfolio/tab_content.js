import React from "react";
import { Link } from "react-router-dom";
import TabContent from "../../assets/css/tabContent.module.css";

function ClientTabContent({ activeTab, tabs = [] }) {
    const projects = tabs[activeTab]?.content || [];

    return (
        <div className={TabContent.uiTabContent}>
            {projects.length === 0 ? (
                <div className="content-empity">
                    <div className="empity-card">
                        <div className="empity-card-body">
                            <b className="empity-text">No projects available</b>
                        </div>
                    </div>
                </div>
            ) : (
                <div className={TabContent.uiTabContentFill}>
                    <div className="row">
                        {projects.map((project, index) => (
                            <div className="col-xl-4 col-lg-6 col-md-6 col-12" key={index}>
                                <div className={TabContent.uiTabCard} >
                                    <div className={TabContent.uiTabThumbnailWrap}>
                                        {/* <Link to={project.link} className={TabContent.}"tab-content-link"> */}
                                        <Link to={project.link}>
                                            <div className={TabContent.uiTabThumbnail}>
                                                <img src={project.thumbnail} alt={project.title} className="img-fluid" />
                                                <div className={TabContent.uiTabThumbnailOverlay}></div>
                                            </div>
                                        </Link>
                                        <div className={TabContent.uiTabTags}>
                                            <ul className={`nav ${TabContent.uiNav}`}>
                                                {project.tags.map((tag, i) => (
                                                    <li className={`nav-item ${TabContent.uiTabTagsBadges}`} key={i} >
                                                        <span>{tag}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className={TabContent.uiTabCardBody}>
                                        {/* <Link to={project.link} className={TabContent.}"tab-content-link"> */}
                                        <Link to={project.link}>
                                            <h3 className={TabContent.uiTitle}>{project.title}</h3>
                                        </Link>
                                        <p className={TabContent.uidesc}>{project.description}</p>
                                        <div className={TabContent.uitabBodyTags}>
                                            <ul className={`nav ${TabContent.uiNav}`}>
                                                {project.projectType.map((type, i) => (
                                                    <li className={`nav-item ${TabContent.uiTabTagsBadges}`} key={i} >
                                                        <span>{type}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )
            }
        </div >
    );
}

export default ClientTabContent;
