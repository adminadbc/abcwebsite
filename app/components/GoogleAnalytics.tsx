'use client';

import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handlePageView = () => {
      if (!window.gtag) return;

      const consent = localStorage.getItem('cookieConsent');
      if (consent !== 'true') return;

      const pagePath = searchParams.size ? `${pathname}?${searchParams.toString()}` : pathname;
      const pageTitle = document.title || pathname;
      
      try {
        window.gtag('event', 'page_view', {
          page_title: pageTitle,
          page_location: window.location.href,
          page_path: pagePath,
          send_to: 'G-MQW2S3KCX7'
        });
      } catch (error) {
        console.error('Error tracking page view:', error);
      }
    };

    setTimeout(handlePageView, 100);
  }, [pathname, searchParams]);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-MQW2S3KCX7`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}

            // Initialize with denied consent
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'analytics_storage': 'denied',
              'functionality_storage': 'denied',
              'personalization_storage': 'denied',
              'security_storage': 'granted'
            });

            gtag('js', new Date());
            gtag('config', 'G-MQW2S3KCX7', {
              page_path: window.location.pathname,
              send_page_view: false,
              cookie_flags: 'SameSite=None;Secure',
              cookie_domain: 'auto',
              cookie_expires: 365 * 24 * 60 * 60, // 1 year in seconds
              cookie_update: true,
              client_storage: 'none', // Use first-party storage
              debug_mode: ${process.env.NODE_ENV === 'development'}
            });
          `,
        }}
      />
    </>
  );
} 