import React, { useState } from "react";
import Login from "./Login";
import AdminDashboard from "./AdminDashboard";
import ParentDashboard from "./ParentDashboard";
import './styles.css';

function App() {
  const [userType, setUserType] = useState(null); // 'admin' or 'parent'

  const handleLogin = (username, password) => {
    // This is a simple check, replace it with actual authentication logic
    if (username === 'admin' && password === 'admin123') {
      setUserType('admin');
    } else if (username === 'parent' && password === 'parent123') {
      setUserType('parent');
    }
  };

  return (
    <div className="App">
      {!userType ? (
        <Login onLogin={handleLogin} />
      ) : userType === 'admin' ? (
        <AdminDashboard />
      ) : (
        <ParentDashboard />
      )}
    </div>
  );
}

export default App;
