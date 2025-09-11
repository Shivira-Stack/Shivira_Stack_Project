import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import NavigationRoutes from './utilities/navigationRoutes';

const root = ReactDOM.createRoot(document.getElementById('Stack_App'));
root.render(<React.StrictMode><NavigationRoutes /></React.StrictMode>);
reportWebVitals();
