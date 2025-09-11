import React from 'react';
import Header from '../../assets/css/header.module.css';
import AdminToogleButton from './toogle_button';
import AdminNotifications from './notifications';
import AdminInbox from './inbox';
import AdminUserAction from './user_action';
import { useSidebar } from '../utilities/SidebarContext';


function AdminHeader() {
    const { isOpen } = useSidebar();
  return (
    <header className={`${Header.uiHeader} ${isOpen ? '' : Header.uiHeaderFull}`}>
      <div className={`${Header.uiHeaderLeft}`}>
        <AdminToogleButton />
      </div>
      <div className={`${Header.uiHeaderRight}`}>
        <AdminNotifications />
        <AdminInbox />
        <AdminUserAction />
      </div>
    </header>
  )
}

export default AdminHeader;
