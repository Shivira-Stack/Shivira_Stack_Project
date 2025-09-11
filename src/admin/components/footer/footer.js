import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../assets/css/footer.module.css'

function AdminFooter() {
    const currentYear = new Date().getFullYear();
  return (
    <footer className={`${Footer.uiFooter}`}>
        <div className={`${Footer.uiFooterCopyRight}`}>
            <p>© {currentYear} <Link to='/'>Shivira Stack</Link> . All Rights Reserved.</p>
        </div>
    </footer>
  )
}

export default AdminFooter;
