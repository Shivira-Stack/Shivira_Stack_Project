import { useEffect } from "react";

const API_URL = import.meta.env.VITE_API_URL;

function VendorsHead() {
    useEffect(() => {

        // List of vendor file
        const assets = [
            {
                type: "css",
                href: `${API_URL}/vendors/fontawsome/css/all.css`,
            },
            {
                type: "css",
                href: `${API_URL}/vendors/mui_icons/all.css`,
            },
            {
                type: "css",
                href: `${API_URL}/vendors/bootstrap/css/bootstrap.min.css`,
            },
            {
                type: "js",
                src: `${API_URL}/vendors/bootstrap/js/popper.min.js`,
            },
            {
                type: "js",
                src: `${API_URL}/vendors/bootstrap/js/bootstrap.min.js`,
            },
            {
                type: "css",
                href: `${API_URL}/fonts/mont/montfont.css`,
            },
        ];

        // Dynamic vendor list place
        assets.forEach((asset) => {
            if (asset.type === "css") {
                const link = document.createElement("link");
                link.rel = "stylesheet";
                link.href = asset.href;
                document.head.appendChild(link);
            }

            if (asset.type === "js") {
                const script = document.createElement("script");
                script.src = asset.src;
                document.head.appendChild(script);
            }
        });

        // Custom styles
        const style = document.createElement("style");
        style.textContent = `
            :root {
                --Stack-Font: 'Mont', sans-serif;
            }
            
            *{
                margin: 0;
                padding: 0;
            }
            
            body {
                font-family: var(--Stack-Font);
            }

        `;

        document.head.appendChild(style);

    }, []);

    return null;
}

export default VendorsHead;