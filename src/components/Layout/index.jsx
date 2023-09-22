import { Montserrat } from 'next/font/google';
import Navbar from '@/components/Navbar';
import MobileNav from '@/components/Navbar/MobileNav';
import { useState } from 'react';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function Layout({ children }) {
  const [showMobileNav, setShowMobileNav] = useState(false);
  return (
    <main
      className={`flex min-h-screen flex-col items-center overflow-hidden ${montserrat.className}`}>
      <Navbar setShowMobileNav={setShowMobileNav} />
      {showMobileNav ? <MobileNav setShowMobileNav={setShowMobileNav} /> : null}
      {children}
    </main>
  );
}
