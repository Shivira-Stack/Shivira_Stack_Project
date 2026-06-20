export const apihomePage = () => `
<html>
        <head>
          <title>API's | ${process.env.PROJECT_NAME}</title>
          <style>
            body{
              font-family: Arial;
              text-align:center;
              margin-top:100px;
            }
            h1{
              color:#2563eb;
            }
          </style>
        </head>
        <body>
          <h1>🚀 ${process.env.PROJECT_NAME} API</h1>
          <p>Backend is running successfully.</p>
          <p>Environment: ${process.env.NODE_ENV}</p>
        </body>
      </html>
`;