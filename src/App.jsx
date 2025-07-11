import React from 'react';
import SiteNavbar from './components/Navbar';

function App() {
  return (
    <>
      <SiteNavbar />
      <div className="container mt-4">
        <h1>Welcome to the Condo Association Portal</h1>
        <p>This will be the home page. You can add routes later for Calendar, Documents, and Admin.</p>
      </div>
    </>
  );
}

export default App;
