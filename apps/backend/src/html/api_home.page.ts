export const apihomePage = () => `
      <!doctype html>
      <html lang="en">
        <head>
          <link rel="apple-touch-icon" sizes="57x57" href="${process.env.BACKEND_URL}/favicon/apple-icon-57x57.png">
          <link rel="apple-touch-icon" sizes="60x60" href="${process.env.BACKEND_URL}/favicon/apple-icon-60x60.png">
          <link rel="apple-touch-icon" sizes="72x72" href="${process.env.BACKEND_URL}/favicon/apple-icon-72x72.png">
          <link rel="apple-touch-icon" sizes="76x76" href="${process.env.BACKEND_URL}/favicon/apple-icon-76x76.png">
          <link rel="apple-touch-icon" sizes="114x114" href="${process.env.BACKEND_URL}/favicon/apple-icon-114x114.png">
          <link rel="apple-touch-icon" sizes="120x120" href="${process.env.BACKEND_URL}/favicon/apple-icon-120x120.png">
          <link rel="apple-touch-icon" sizes="144x144" href="${process.env.BACKEND_URL}/favicon/apple-icon-144x144.png">
          <link rel="apple-touch-icon" sizes="152x152" href="${process.env.BACKEND_URL}/favicon/apple-icon-152x152.png">
          <link rel="apple-touch-icon" sizes="180x180" href="${process.env.BACKEND_URL}/favicon/apple-icon-180x180.png">
          <link rel="icon" type="image/png" sizes="192x192"  href="${process.env.BACKEND_URL}/favicon/android-icon-192x192.png">
          <link rel="icon" type="image/png" sizes="32x32" href="${process.env.BACKEND_URL}/favicon/favicon-32x32.png">
          <link rel="icon" type="image/png" sizes="96x96" href="${process.env.BACKEND_URL}/favicon/favicon-96x96.png">
          <link rel="icon" type="image/png" sizes="16x16" href="${process.env.BACKEND_URL}/favicon/favicon-16x16.png">
          <link rel="manifest" href="${process.env.BACKEND_URL}/favicon/manifest.json">
          <meta name="msapplication-TileColor" content="#ffffff">
          <meta name="msapplication-TileImage" content="${process.env.BACKEND_URL}/favicon/ms-icon-144x144.png">
          <meta name="theme-color" content="#ffffff">
          <title>API's | ${process.env.PROJECT_NAME}</title>
          <link href="${process.env.BACKEND_URL}/vendors/bootstrap/css/bootstrap.min.css" rel="stylesheet">
          <script src="${process.env.BACKEND_URL}/vendors/bootstrap/js/popper.min.js"></script>
          <script src="${process.env.BACKEND_URL}/vendors/bootstrap/js/bootstrap.min.js"></script>
          <style>
        body {
            min-height: 100vh;
            background: linear-gradient(135deg, #0f172a 0%, #01299C 50%, #224BBE 100%);
            overflow: hidden;
            position: relative;
            font-family: Inter, Arial, sans-serif;
        }

        .bg-shape {
            position: absolute;
            border-radius: 50%;
            filter: blur(120px);
            opacity: .3;
        }

        .shape-1 {
            width: 350px;
            height: 350px;
            background: #60a5fa;
            top: -100px;
            left: -100px;
        }

        .shape-2 {
            width: 400px;
            height: 400px;
            background: #8b5cf6;
            right: -100px;
            bottom: -100px;
        }

        .api-card {
            background: rgba(255,255,255,.08);
            backdrop-filter: blur(18px);
            border: 1px solid rgba(255,255,255,.15);
            border-radius: 24px;
            color: white;
            max-width: 700px;
            box-shadow: 0 25px 50px rgba(0,0,0,.25);
        }

        .logo-circle {
            width: 90px;
            height: 90px;
            border-radius: 50%;
            background: rgba(255,255,255,1);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 42px;
            margin: auto;
        }

        .status-dot {
            width: 10px;
            height: 10px;
            background: #1AB79F;
            border-radius: 50%;
            display: inline-block;
            animation: pulse 1.5s infinite;
        }

        .badge-online {
            background: rgba(26, 183, 159, 0.15);
            color: #1AB79F;
            border: 1px solid rgba(26, 183, 159, 0.3);
            padding: 10px 16px;
            border-radius: 50px;
            font-weight: 600;
            font-size: 14px;
        }

        .env-value {
            color: #FDAB06;
            font-weight: 600;
            text-transform: capitalize;
        }

        @keyframes pulse {
            0% {
                transform: scale(1);
                opacity: 1;
            }
            50% {
                transform: scale(1.4);
                opacity: .6;
            }
            100% {
                transform: scale(1);
                opacity: 1;
            }
        }
    </style>
        </head>
        <body>
          <div class="container min-vh-100 d-flex align-items-center justify-content-center">
            <div class="api-card p-4 p-md-5 text-center">
                <div class="logo-circle mb-4"><img src="${process.env.BACKEND_URL}/images/brand_icon52x40.svg" alt="Logo" width="60" height="60"></div>
                <h1 class="display-5 fw-bold mb-3">${process.env.PROJECT_NAME} API's Host</h1>
                <p class="lead text-light opacity-75 mb-4">Backend is running successfully.</p>
                <div class="d-inline-flex align-items-center gap-2 badge-online mb-4"><span class="status-dot"></span>API Online</div>
                <div class="mb-3">
                    <span class="text-light opacity-75">Environment:</span>
                    <span class="env-value">${process.env.NODE_ENV}</span>
                </div>
                <hr class="border-light opacity-25">
                <div class="small opacity-50" style="color: #FFF;">
                    Powered by ${process.env.PROJECT_NAME}
                </div>
            </div>
          </div>
        </body>
      </html>
`;