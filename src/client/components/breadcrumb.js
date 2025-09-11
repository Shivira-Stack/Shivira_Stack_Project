import React from 'react';
import Breadcrumb from '../assets/css/breadcrumb.module.css';
import BreadcrumbVideo from '../assets/video/breadcrumb.mp4';

function ClientBreadcrumb() {
    return (
        <section className={Breadcrumb.uiSection}>
            <video autoPlay loop muted playsInline className={Breadcrumb.uiVideo}>
                <source src={BreadcrumbVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className={Breadcrumb.uiOverlay}></div>
            <div className={Breadcrumb.uiWrap}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-8'>
                            <div className={Breadcrumb.uiContent}>
                                <h2 className={Breadcrumb.uiTitle}>All Case <em>Studies</em></h2>
                                <div className={Breadcrumb.uiDesc}>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                    <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ClientBreadcrumb;
