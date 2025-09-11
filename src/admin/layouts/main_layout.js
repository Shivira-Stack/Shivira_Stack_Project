import React from 'react';
import { Outlet } from "react-router-dom";
import { useSessionChecker } from '../../utilities/useSessionChecker';
import AdminHeader from '../components/header/header';
import AdminFooter from '../components/footer/footer';
import AdminAside from './aside/aside';
import Globle from '../assets/css/globle.module.css';
import { SidebarProvider, useSidebar } from '../components/utilities/SidebarContext';

function AdminMainContent() {
  const { isOpen } = useSidebar();

  return (
    <div className={`${Globle.uiMainContent} ${isOpen ? '' : Globle.uiMainContentFull}`}>
      <AdminHeader />
      <main className={`${Globle.uiSectionsWrap}`}>
        <Outlet />
      </main>
      <AdminFooter />
    </div>
  );
}

function AdminMainLayout() {
  useSessionChecker();

  return (
    <SidebarProvider>
      <div className={Globle.uiMainLayout}>
        <AdminAside />
        <AdminMainContent />
      </div>
    </SidebarProvider>
  );
}

export default AdminMainLayout;
