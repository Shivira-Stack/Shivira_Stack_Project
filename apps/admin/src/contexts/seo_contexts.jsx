import { Helmet } from "react-helmet-async";

function Seo({
    lang = "en",
    utf = "UTF-8",
    title = "Page",
    project = "Shivira Stack",
    faviconURL = "http//localhost",
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
            <title>{title + " | " + project}</title>

            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={author} />
            <meta name="robots" content={robots} />

            {/* Canonical */}
            <link rel="canonical" href={url} />

            {/* Favicon Icon */}
            <link rel="apple-touch-icon" sizes="57x57" href={`${faviconURL}/apple-icon-57x57.png`} />
            <link rel="apple-touch-icon" sizes="60x60" href={`${faviconURL}/apple-icon-60x60.png`} />
            <link rel="apple-touch-icon" sizes="72x72" href={`${faviconURL}/apple-icon-72x72.png`} />
            <link rel="apple-touch-icon" sizes="76x76" href={`${faviconURL}/apple-icon-76x76.png`} />
            <link rel="apple-touch-icon" sizes="114x114" href={`${faviconURL}/apple-icon-114x114.png`} />
            <link rel="apple-touch-icon" sizes="120x120" href={`${faviconURL}/apple-icon-120x120.png`} />
            <link rel="apple-touch-icon" sizes="144x144" href={`${faviconURL}/apple-icon-144x144.png`} />
            <link rel="apple-touch-icon" sizes="152x152" href={`${faviconURL}/apple-icon-152x152.png`} />
            <link rel="apple-touch-icon" sizes="180x180" href={`${faviconURL}/apple-icon-180x180.png`} />
            <link rel="icon" type="image/png" sizes="192x192" href={`${faviconURL}/android-icon-192x192.png`} />
            <link rel="icon" type="image/png" sizes="32x32" href={`${faviconURL}/favicon-32x32.png`} />
            <link rel="icon" type="image/png" sizes="96x96" href={`${faviconURL}/favicon-96x96.png`} />
            <link rel="icon" type="image/png" sizes="16x16" href={`${faviconURL}/favicon-16x16.png`} />
            <link rel="manifest" href={`${faviconURL}/manifest.json`} />
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="msapplication-TileImage" content={`${faviconURL}/ms-icon-144x144.png`} />

            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title + " | " + project} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={url} />
            <meta property="og:site_name" content="Shivira Stack" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title + " | " + project} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </Helmet>
    );
}

export default Seo;