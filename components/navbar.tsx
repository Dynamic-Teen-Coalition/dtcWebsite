"use client"

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('hero');
  const pathname = usePathname();

  useEffect(() => {
    const updateNavbar = () => {
      setIsScrolled(window.pageYOffset > 100);
    };

    const updateActiveNavLink = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionHeight = section.offsetHeight;
        // Improved detection: consider a section active when it's in the middle third of viewport
        if (sectionTop <= window.innerHeight / 3 && sectionTop + sectionHeight > window.innerHeight / 3) {
          current = section.getAttribute('id');
        }
      });
      
      if (current) {
        setActiveLink(current);
      }
    };

    const handleScroll = () => {
      updateNavbar();
      updateActiveNavLink();
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const navLinks = [
    { href: '#hero', label: 'Home', isHash: true },
    { href: '#about', label: 'About', isHash: true },
    { href: '#works', label: 'Our Work', isHash: true },
    { href: '#team', label: 'Team', isHash: true },
    { href: '#contact', label: 'Contact', isHash: true },
  ];

  const handleNavClick = (href, isHash) => {
    if (isHash) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const isActiveLink = (href, isHash) => {
    if (!isHash) {
      return pathname === href;
    }
    return activeLink === href.substring(1);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-content">
        <div className="logo">DTC</div>
        <ul className="nav-links">
          {navLinks.map(({ href, label, isHash }) => (
            <li key={href}>
              <a 
                href={href} 
                onClick={(e) => {
                  if (isHash) {
                    e.preventDefault();
                    handleNavClick(href, isHash);
                  }
                }}
                className={`nav-link ${isActiveLink(href, isHash) ? 'active' : ''}`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
