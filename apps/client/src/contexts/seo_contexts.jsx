import { Helmet } from "react-helmet-async";
const API_URL = import.meta.env.VITE_API_URL;

function Seo({
    apiURL = API_URL,
    lang = "en",
    utf = "UTF-8",
    title = "Page",
    project = "Shivira Stack",
    description = "Shivira Stack Web Application",
    keywords = "",
    author = "Shivira Stack",
    image = "/assets/images/seo-banner.png",
    url = window.location.href,
    robots = "index, follow",

}) {
    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
        >
            {/* Basic SEO */}
            <meta charset={utf} />
            <title>{title + " | " + "Client" + " | " + project}</title>

            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={author} />
            <meta name="robots" content={robots} />

            {/* Canonical */}
            <link rel="canonical" href={url} />

            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title + " | " + project} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={url} />
            <meta property="og:site_name" content={project} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title + " | " + project} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Helmet>
    );
}

export default Seo;