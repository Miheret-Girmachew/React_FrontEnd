import React, { useState } from 'react';
import LoginPage from './LoginPage';
import RegistrationPage from './RegistrationPage';
import ProfilePage from './ProfilePage';

const App = () => {
  const [currentPage, setCurrentPage] = useState('login');
  const [user, setUser] = useState(null);

  const handleSuccessfulLogin = (userData) => {
    setUser(userData);
    setCurrentPage('profile');
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentPage('login');
  };

  const handleRegistration = () => {
    setCurrentPage('registration');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <LoginPage onSuccess={handleSuccessfulLogin} onRegistration={handleRegistration} />;
      case 'registration':
        return <RegistrationPage onSuccess={() => setCurrentPage('login')} />;
      case 'profile':
        return <ProfilePage user={user} onLogout={handleLogout} />;
      default:
        return null;
    }
  };

  return <div>{renderPage()}</div>;
};

export default App;
