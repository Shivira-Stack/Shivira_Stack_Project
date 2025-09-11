import React, { useState } from "react";
import Globle from '../assets/css/globle.module.css';
import ClientBreadcrumb from "../components/breadcrumb";
import ClientTabSlider from "../sections/portfolio/tab_slider";
import ClientTabContent from "../sections/portfolio/tab_content";

function ClientBlog() {
    const [activeTab, setActiveTab] = useState(0);

    const blogTabs = [
        {
            title: "UX/UI Design",
            content: [
                {
                    title: "Company Profile Website",
                    description:
                        "A modern corporate website showcasing services, team, and case studies with responsive design.",
                    tags: ["UI/UX", "React", "Next.js", "TailwindCSS"],
                    projectType: ["Portfolio", "Corporate"],
                    link: "/projects/company-profile",
                    thumbnail: "https://pixxelu.com/images/portfolio-image/portfolio-image-3.jpg"
                },
                {
                    title: "Personal Portfolio",
                    description:
                        "Creative personal portfolio for designers and developers to showcase their work.",
                    tags: ["UI/UX", "React", "Framer Motion"],
                    projectType: ["Portfolio", "Creative"],
                    link: "/projects/personal-portfolio",
                    thumbnail: "https://pixxelu.com/images/portfolio-image/portfolio-image-3.jpg"
                },
                {
                    title: "Company Profile Website",
                    description:
                        "A modern corporate website showcasing services, team, and case studies with responsive design.",
                    tags: ["UI/UX", "React", "Next.js", "TailwindCSS"],
                    projectType: ["Portfolio", "Corporate"],
                    link: "/projects/company-profile",
                    thumbnail: "https://pixxelu.com/images/portfolio-image/portfolio-image-3.jpg"
                }
            ]
        },
        {
            title: "Web Design",
            content: [
                {
                    title: "SaaS Dashboard",
                    description:
                        "Analytics dashboard with charts, user management, and role-based authentication.",
                    tags: ["React", "Node.js", "MongoDB", "Chart.js"],
                    projectType: ["SaaS", "Analytics"],
                    link: "/projects/saas-dashboard",
                    thumbnail: "https://pixxelu.com/images/portfolio-image/portfolio-image-3.jpg"
                },
                {
                    title: "Project Management Tool",
                    description:
                        "Kanban board, task tracking, and real-time collaboration features.",
                    tags: ["React", "Redux", "Node.js", "Socket.io"],
                    projectType: ["Productivity", "Collaboration"],
                    link: "/projects/project-management",
                    thumbnail: "https://pixxelu.com/images/portfolio-image/portfolio-image-3.jpg"
                }
            ]
        },
        {
            title: "Shopify",
            content: [
                {
                    title: "Subscription Platform",
                    description:
                        "Multi-tier subscription model with Stripe integration for payments.",
                    tags: ["Next.js", "Stripe API", "MongoDB"],
                    projectType: ["Fintech", "Subscription"],
                    link: "/projects/subscription-platform",
                    thumbnail: "https://pixxelu.com/images/portfolio-image/portfolio-image-3.jpg"
                },
                {
                    title: "E-learning LMS",
                    description:
                        "Learning management system with course creation, student enrollment, and payments.",
                    tags: ["React", "Node.js", "Express", "MySQL"],
                    projectType: ["LMS", "Education"],
                    link: "/projects/lms",
                    thumbnail: "https://pixxelu.com/images/portfolio-image/portfolio-image-3.jpg"
                }
            ]
        },
        {
            title: "React & Node",
            content: [
                {
                    title: "Customer Support Portal",
                    description:
                        "Self-service knowledge base and ticketing system with FAQ search.",
                    tags: ["React", "Firebase", "TailwindCSS"],
                    projectType: ["Support", "Helpdesk"],
                    link: "/projects/support-portal",
                    thumbnail: "https://pixxelu.com/images/portfolio-image/portfolio-image-3.jpg"
                },
                {
                    title: "Chatbot Assistant",
                    description:
                        "AI-driven FAQ chatbot for instant customer response.",
                    tags: ["Node.js", "Dialogflow", "React"],
                    projectType: ["AI", "Support"],
                    link: "/projects/chatbot",
                    thumbnail: "https://pixxelu.com/images/portfolio-image/portfolio-image-3.jpg"
                }
            ]
        },
        {
            title: "Laravel",
            content: [
                {
                    title: "E-commerce Store",
                    description:
                        "High-performance e-commerce platform with cart, checkout, and order management.",
                    tags: ["React", "Node.js", "MongoDB", "Stripe"],
                    projectType: ["E-commerce", "Retail"],
                    link: "/projects/ecommerce",
                    thumbnail: "https://pixxelu.com/images/portfolio-image/portfolio-image-3.jpg"
                },
                {
                    title: "Real Estate Portal",
                    description:
                        "Property listing, search filters, and agent dashboards for real estate businesses.",
                    tags: ["Next.js", "Node.js", "MongoDB", "ElasticSearch"],
                    projectType: ["Real Estate", "Marketplace"],
                    link: "/projects/real-estate",
                    thumbnail: "https://pixxelu.com/images/portfolio-image/portfolio-image-3.jpg"
                },
                {
                    title: "Food Delivery App",
                    description:
                        "Full-stack food delivery system with restaurant listings, cart, and live order tracking.",
                    tags: ["React Native", "Node.js", "Firebase"],
                    projectType: ["Delivery", "Mobile App"],
                    link: "/projects/food-delivery",
                    thumbnail: "https://pixxelu.com/images/portfolio-image/portfolio-image-3.jpg"
                }
            ]
        },
        {
            title: "Coldfusion",
            content: [
                {
                    title: "Healthcare System",
                    description:
                        "Patient portal with appointment booking and digital prescriptions.",
                    tags: ["React", "Django", "PostgreSQL"],
                    projectType: ["Healthcare", "Portal"],
                    link: "/projects/healthcare",
                    thumbnail: "https://pixxelu.com/images/portfolio-image/portfolio-image-3.jpg"
                },
                {
                    title: "Travel Booking Platform",
                    description:
                        "Hotel, flight, and package booking with dynamic pricing engine.",
                    tags: ["Next.js", "Node.js", "GraphQL"],
                    projectType: ["Travel", "Booking"],
                    link: "/projects/travel-booking",
                    thumbnail: "https://pixxelu.com/images/portfolio-image/portfolio-image-3.jpg"
                },
                {
                    title: "Fintech Wallet App",
                    description:
                        "Digital wallet with peer-to-peer transfers and transaction history.",
                    tags: ["React Native", "Node.js", "MongoDB"],
                    projectType: ["Fintech", "Mobile App"],
                    link: "/projects/wallet-app",
                    thumbnail: "https://pixxelu.com/images/portfolio-image/portfolio-image-3.jpg"
                }
            ]
        },
        {
            title: "Mobile Application",
            content: [
                {
                    title: "Healthcare System",
                    description:
                        "Patient portal with appointment booking and digital prescriptions.",
                    tags: ["React", "Django", "PostgreSQL"],
                    projectType: ["Healthcare", "Portal"],
                    link: "/projects/healthcare",
                    thumbnail: "https://pixxelu.com/images/portfolio-image/portfolio-image-3.jpg"
                },
                {
                    title: "Travel Booking Platform",
                    description:
                        "Hotel, flight, and package booking with dynamic pricing engine.",
                    tags: ["Next.js", "Node.js", "GraphQL"],
                    projectType: ["Travel", "Booking"],
                    link: "/projects/travel-booking",
                    thumbnail: "https://pixxelu.com/images/portfolio-image/portfolio-image-3.jpg"
                }
            ]
        }
    ];
    return (
        <>
            <ClientBreadcrumb />
            <section className={Globle.uiSection}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className={Globle.uiSectionHeader}>
                                <h2 className={Globle.uiSectionTitle}>Blog | Insights, Guides & Updates</h2>
                                <p className={Globle.uiSectionDesc}>Read expert articles, case studies, and tutorials on design, development, technology, and digital innovation. Stay updated with the latest insights.</p>
                            </div>
                        </div>
                    </div>
                    <ClientTabSlider
                        tabs={blogTabs}
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                    />
                    <ClientTabContent activeTab={activeTab} tabs={blogTabs} />
                </div>
            </section>
        </>
    )
}

export default ClientBlog;
