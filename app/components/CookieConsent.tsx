'use client';

import { useState, useEffect } from 'react';
import { Button } from "@material-tailwind/react";

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Check if user has already given consent
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowConsent(false);
    
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'ad_storage': 'granted',
        'analytics_storage': 'granted',
        'functionality_storage': 'granted',
        'personalization_storage': 'granted',
        'security_storage': 'granted'
      });
    }
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'false');
    setShowConsent(false);
    
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'ad_storage': 'denied',
        'analytics_storage': 'denied',
        'functionality_storage': 'denied',
        'personalization_storage': 'denied',
        'security_storage': 'granted'
      });
    }
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm md:text-base text-gray-700">
          <p>
            We use cookies to enhance your browsing experience and analyze our traffic. 
            By clicking "Accept All", you consent to our use of cookies. 
            <a 
              href="/policy" 
              className="text-abcf hover:underline ml-1"
            >
              Learn more
            </a>
          </p>
        </div>
        <div className="flex gap-4">
          <Button
            onClick={declineCookies}
            className="bg-gray-200 text-black hover:bg-gray-300"
            size="sm"
          >
            Decline
          </Button>
          <Button
            onClick={acceptCookies}
            className="bg-abcf text-black"
            size="sm"
          >
            Accept All
          </Button>
        </div>
      </div>
    </div>
  );
} 