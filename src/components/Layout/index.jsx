import { Montserrat } from 'next/font/google';
import Navbar from '@/components/Navbar';
import MobileNav from '@/components/Navbar/MobileNav';
import { useState } from 'react';

const montserrat = Montserrat({ subsets: ['latin'] });

function isActive(router, link) {
  if (link.includes('#')) {
    // Split hashed links
    const [linkPath, linkHash] = link.split('#');
    return router.pathname === linkPath && router.asPath.includes(linkHash);
  } else {
    // Direct match for non-hashed links
    return router.pathname === link;
  }
}

export default function Layout({ children }) {
  const [showMobileNav, setShowMobileNav] = useState(false);
  return (
    <main
      className={`flex min-h-screen  flex-col items-center overflow-hidden ${montserrat.className}`}>
      <Navbar setShowMobileNav={setShowMobileNav} isActive={isActive} />
      {showMobileNav ? (
        <MobileNav isActive={isActive} setShowMobileNav={setShowMobileNav} />
      ) : null}
      {children}
    </main>
  );
}
