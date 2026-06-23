import { useEffect } from "react";

const API_URL = import.meta.env.VITE_API_URL;

function VendorsHead() {
    useEffect(() => {
        const faviconPath = `${API_URL}/favicon`;

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
                href: `${API_URL}/fonts/inter/interfont.css`,
            },
        ];

        const addedElements = [];

        // Add vendor assets
        assets.forEach((asset) => {
            if (asset.type === "css") {
                const link = document.createElement("link");
                link.rel = "stylesheet";
                link.href = asset.href;

                document.head.appendChild(link);
                addedElements.push(link);
            }

            if (asset.type === "js") {
                const script = document.createElement("script");
                script.src = asset.src;
                script.defer = true;

                document.head.appendChild(script);
                addedElements.push(script);
            }
        });

        // Viewport Meta
        const viewportMeta = document.createElement("meta");
        viewportMeta.name = "viewport";
        viewportMeta.content = "width=device-width, initial-scale=1.0";

        document.head.appendChild(viewportMeta);
        addedElements.push(viewportMeta);

        // Favicon & Icons
        const headTags = [
            {
                rel: "apple-touch-icon",
                sizes: "57x57",
                href: `${faviconPath}/apple-icon-57x57.png`,
            },
            {
                rel: "apple-touch-icon",
                sizes: "60x60",
                href: `${faviconPath}/apple-icon-60x60.png`,
            },
            {
                rel: "apple-touch-icon",
                sizes: "72x72",
                href: `${faviconPath}/apple-icon-72x72.png`,
            },
            {
                rel: "apple-touch-icon",
                sizes: "76x76",
                href: `${faviconPath}/apple-icon-76x76.png`,
            },
            {
                rel: "apple-touch-icon",
                sizes: "114x114",
                href: `${faviconPath}/apple-icon-114x114.png`,
            },
            {
                rel: "apple-touch-icon",
                sizes: "120x120",
                href: `${faviconPath}/apple-icon-120x120.png`,
            },
            {
                rel: "apple-touch-icon",
                sizes: "144x144",
                href: `${faviconPath}/apple-icon-144x144.png`,
            },
            {
                rel: "apple-touch-icon",
                sizes: "152x152",
                href: `${faviconPath}/apple-icon-152x152.png`,
            },
            {
                rel: "apple-touch-icon",
                sizes: "180x180",
                href: `${faviconPath}/apple-icon-180x180.png`,
            },
            {
                rel: "icon",
                type: "image/png",
                sizes: "192x192",
                href: `${faviconPath}/android-icon-192x192.png`,
            },
            {
                rel: "icon",
                type: "image/png",
                sizes: "32x32",
                href: `${faviconPath}/favicon-32x32.png`,
            },
            {
                rel: "icon",
                type: "image/png",
                sizes: "96x96",
                href: `${faviconPath}/favicon-96x96.png`,
            },
            {
                rel: "icon",
                type: "image/png",
                sizes: "16x16",
                href: `${faviconPath}/favicon-16x16.png`,
            },
            {
                rel: "icon",
                type: "image/x-icon",
                href: `${faviconPath}/favicon.ico`,
            },
        ];

        headTags.forEach((item) => {
            const link = document.createElement("link");

            Object.entries(item).forEach(([key, value]) => {
                link.setAttribute(key, value);
            });

            document.head.appendChild(link);
            addedElements.push(link);
        });

        // Dynamic Manifest
        const manifest = {
            name: "App",
            icons: [
                {
                    src: `${faviconPath}/android-icon-36x36.png`,
                    sizes: "36x36",
                    type: "image/png",
                    density: "0.75",
                },
                {
                    src: `${faviconPath}/android-icon-48x48.png`,
                    sizes: "48x48",
                    type: "image/png",
                    density: "1.0",
                },
                {
                    src: `${faviconPath}/android-icon-72x72.png`,
                    sizes: "72x72",
                    type: "image/png",
                    density: "1.5",
                },
                {
                    src: `${faviconPath}/android-icon-96x96.png`,
                    sizes: "96x96",
                    type: "image/png",
                    density: "2.0",
                },
                {
                    src: `${faviconPath}/android-icon-144x144.png`,
                    sizes: "144x144",
                    type: "image/png",
                    density: "3.0",
                },
                {
                    src: `${faviconPath}/android-icon-192x192.png`,
                    sizes: "192x192",
                    type: "image/png",
                    density: "4.0",
                },
            ],
        };

        const manifestBlob = new Blob(
            [JSON.stringify(manifest)],
            { type: "application/json" }
        );

        const manifestUrl = URL.createObjectURL(manifestBlob);

        const manifestLink = document.createElement("link");
        manifestLink.rel = "manifest";
        manifestLink.href = manifestUrl;

        document.head.appendChild(manifestLink);
        addedElements.push(manifestLink);

        // MS Application Tile Color
        const tileColor = document.createElement("meta");
        tileColor.name = "msapplication-TileColor";
        tileColor.content = "#ffffff";

        document.head.appendChild(tileColor);
        addedElements.push(tileColor);

        // MS Application Tile Image
        const tileImage = document.createElement("meta");
        tileImage.name = "msapplication-TileImage";
        tileImage.content = `${faviconPath}/ms-icon-144x144.png`;

        document.head.appendChild(tileImage);
        addedElements.push(tileImage);

        // Custom Styles
        const style = document.createElement("style");
        style.textContent = `
            :root {
                --Stack-Font: 'Inter', sans-serif;
                --Stack-White: 255, 255, 255;
                --Stack-Black: 0, 0, 0;

                --Stack-GhostWhite: 248, 249, 250;
                --Stack-Gunmetal: 29, 38, 48;
                --Stack-MistGray: 190, 200, 208;
                --Stack-CrimsonRed: 220, 20, 60;

                --Stack-RoyalBlue: 1, 41, 156;
                --Stack-CornflowerBlue: 34, 75, 190;
                --Stack-Charcoal: 91, 107, 121;
            }

            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            body {
                font-family: var(--Stack-Font);
                background-color: rgb(var(--Stack-GhostWhite));
            }
        `;

        document.head.appendChild(style);
        addedElements.push(style);

        return () => {
            addedElements.forEach((element) => {
                if (element.parentNode) {
                    element.parentNode.removeChild(element);
                }
            });

            URL.revokeObjectURL(manifestUrl);
        };
    }, []);

    return null;
}

export default VendorsHead;