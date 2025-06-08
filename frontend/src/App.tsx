import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import PublicGallery from './components/PublicGallery';
import ImageUpload from './components/ImageUpload';
import AuthModal from './components/AuthModal';

function App() {
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');

  const handleGetStarted = () => {
    setIsUploadOpen(true);
  };

  const handleLoginClick = () => {
    setAuthMode('login');
    setIsAuthOpen(true);
  };

  const handleSignupClick = () => {
    setAuthMode('signup');
    setIsAuthOpen(true);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar onLoginClick={handleLoginClick} onSignupClick={handleSignupClick} />
      <Hero onGetStarted={handleGetStarted} />
      <HowItWorks />
      <Pricing />
      <PublicGallery />
      
      <ImageUpload isOpen={isUploadOpen} onClose={() => setIsUploadOpen(false)} />
      <AuthModal 
        isOpen={isAuthOpen} 
        onClose={() => setIsAuthOpen(false)}
        mode={authMode}
        onModeChange={setAuthMode}
      />
    </div>
  );
}

export default App;