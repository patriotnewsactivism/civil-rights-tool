import { useState } from 'react';
import HomePage from './HomePage';
import SocialFeed from './SocialFeed';
import UserNetwork from './UserNetwork';
import NotificationsCenter from './NotificationsCenter';
import PressPassGenerator from './PressPassGenerator';
import CivilRightsHub from './CivilRightsHub';
import MainNavigation from './MainNavigation';
import { useAuth } from '../context/AuthContext';

export default function AppWrapper() {
  const [currentPage, setCurrentPage] = useState('home');
  const { user } = useAuth();

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return user ? <SocialFeed /> : <HomePage />;
      case 'feed':
        return <SocialFeed />;
      case 'network':
        return <UserNetwork />;
      case 'notifications':
        return <NotificationsCenter />;
      case 'press-pass':
        return <PressPassGenerator />;
      case 'violations':
        return <CivilRightsHub />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {currentPage !== 'home' || user ? (
        <MainNavigation 
          currentPage={currentPage} 
          onNavigate={setCurrentPage} 
        />
      ) : null}
      {renderPage()}
    </div>
  );
}
