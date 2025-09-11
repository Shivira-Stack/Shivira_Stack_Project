import React from 'react';

function ClientDeviceScreen() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100vh', background: 'rgba(244, 245, 255, 1)', padding: '0px 15px' }}>
        <h1 style={{ margin: '0', fontSize: '16px', lineHeight: '24px', fontWeight: '500', color: 'rgba(29, 30, 32, 1)', textAlign: 'center' }}>This device screen is too small to display our content properly. Please switch to a larger device.</h1>
    </div>
  )
}

export default ClientDeviceScreen;
