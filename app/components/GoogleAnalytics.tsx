'use client';

import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handlePageView = () => {
      if (!window.gtag) return;

      const pagePath = searchParams.size ? `${pathname}?${searchParams.toString()}` : pathname;
      const pageTitle = document.title || pathname;
      
      try {
        window.gtag('event', 'page_view', {
          page_title: pageTitle,
          page_location: window.location.href,
          page_path: pagePath,
          send_to: 'G-MQW2S3KCX7'
        });

        if (process.env.NODE_ENV === 'development') {
          console.log('Page tracked:', {
            title: pageTitle,
            path: pagePath,
            url: window.location.href
          });
        }
      } catch (error) {
        console.error('Error tracking page view:', error);
      }
    };

    // Delay the page view tracking slightly to ensure GA is properly initialized
    setTimeout(handlePageView, 100);
  }, [pathname, searchParams]);

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-MQW2S3KCX7`}
        onError={(e) => console.error('Error loading GA script:', e)}
      />
      <Script
        id="google-analytics"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MQW2S3KCX7', {
              page_path: window.location.pathname,
              send_page_view: true,
              debug_mode: ${process.env.NODE_ENV === 'development'}
            });
          `,
        }}
      />
    </>
  );
} 