'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useSession, signIn, signOut } from "next-auth/react";

const navigation = [
  { label: 'Crew', href: '#crew' },
  { label: 'Adventure', href: '#adventure' },
  { label: 'Treasure', href: '#treasure' },
  { label: 'Join Us', href: '#contact' },
];


const Navbar = () => {
  const { data: session, status } = useSession();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    // Only add the listener when the dropdown is open
    if (isDropdownOpen) {
      document.addEventListener('click', handleClickOutside);
      // Add escape key listener
      const handleEscape = (event) => {
        if (event.key === 'Escape') {
          setIsDropdownOpen(false);
        }
      };
      document.addEventListener('keydown', handleEscape);

      return () => {
        document.removeEventListener('click', handleClickOutside);
        document.removeEventListener('keydown', handleEscape);
      };
    }
  }, [isDropdownOpen]);

  // Handle loading state
  if (status === "loading") {
    return null; // or a loading spinner
  }

  const handleSignOut = () => {
    signOut({ callbackUrl: '/' });
  };
  return (
    <header className="relative flex justify-center px-4 pt-6">
      {/* Pirate ship sail effect background */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b from-amber-100/20 via-orange-200/30 to-transparent blur-xl" />

      <nav
        className="mx-auto flex w-[min(100%,68rem)] items-center justify-between rounded-full border-2 border-amber-400/40 bg-gradient-to-r from-red-600 via-red-700 to-amber-600 px-6 py-3 text-white shadow-2xl backdrop-blur-md"
        aria-label="Straw Hat Pirates Navigation"
      >
        {/* Straw Hat Pirates Logo */}
        <Link href="/" className="flex items-center gap-3 group" aria-label="Straw Hat Pirates, set sail to home">
          <div className="relative">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-300 shadow-lg ring-2 ring-amber-400 group-hover:ring-amber-300 transition-all duration-300">
              <img src="/favicon.ico" alt="Straw Hat" className="h-8 w-8 drop-shadow-md" />
            </span>
            {/* Jolly Roger effect */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-red-500 to-amber-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-xs uppercase tracking-[0.3em] text-amber-200 font-semibold">Straw Hat Pirates</span>
            <span className="text-xl font-bold text-white drop-shadow-md">Get Me a StrawHat</span>
          </div>
        </Link>

        {/* Navigation Links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="group relative text-sm font-bold uppercase tracking-[0.2em] text-amber-100 transition duration-300 ease-out hover:text-white hover:drop-shadow-md"
              >
                {item.label}
                {/* Pirate sword underline effect */}
                <span className="absolute -bottom-2 left-1/2 h-0.5 w-0 bg-gradient-to-r from-amber-400 to-yellow-300 transition-all duration-300 ease-out group-hover:left-0 group-hover:w-full rounded-full shadow-sm" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Action Buttons */}
        <div className="hidden items-center gap-3 sm:flex">
          {!session ? (
            <Link href="/Login">
              <button className="cursor-pointer rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 px-5 py-2.5 text-sm font-bold tracking-wide text-red-900 transition hover:from-amber-300 hover:to-yellow-400 hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 inline-flex items-center gap-2">
                Join Crew
                <span aria-hidden="true" className="text-lg">⚔️</span>
              </button>
            </Link>
          ) : (
            <>
              <div className="relative inline-block text-left" ref={dropdownRef}>
                <button
                  type="button"
                  className="group cursor-pointer rounded-full border-2 border-amber-300/50 px-4 py-2 text-sm font-semibold tracking-wide text-amber-100 transition-all duration-200 hover:border-amber-300 hover:bg-amber-400/20 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 inline-flex items-center gap-2 select-none"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsDropdownOpen(!isDropdownOpen);
                  }}
                  aria-expanded={isDropdownOpen}
                  aria-haspopup="true"
                >
                    Welcome { session.user.name }
                  <svg
                    className={`w-4 h-4 transform transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>

                <div
                  className={`
                    absolute right-0 mt-2 w-48 origin-top-right rounded-lg shadow-lg 
                    bg-gradient-to-br from-red-800 to-red-900 ring-1 ring-amber-300/10
                    transform transition-all duration-200 ease-out
                    ${isDropdownOpen
                      ? 'opacity-100 scale-100 translate-y-0'
                      : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}
                  `}
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                >
                  <div className="py-1" role="none">
                    <Link
                      href="/dashboard"
                      className="group text-amber-100 hover:text-white block px-4 py-2 text-sm transition-all duration-200 relative overflow-hidden"
                      role="menuitem"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <span className="relative z-10">Dashboard</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></div>
                    </Link>
                    <Link
                      href="/settings"
                      className="group text-amber-100 hover:text-white block px-4 py-2 text-sm transition-all duration-200 relative overflow-hidden"
                      role="menuitem"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <span className="relative z-10">Settings</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></div>
                    </Link>
                    <Link
                      href="/bounties"
                      className="group text-amber-100 hover:text-white block px-4 py-2 text-sm transition-all duration-200 relative overflow-hidden"
                      role="menuitem"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <span className="relative z-10">Bounties</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></div>
                    </Link>
                    <button
                      type="button"
                      className="group text-amber-100 hover:text-white block w-full text-left px-4 py-2 text-sm transition-all duration-200 relative overflow-hidden"
                      onClick={() => {
                        setIsDropdownOpen(false);
                        handleSignOut();
                      }}
                      role="menuitem"
                    >
                      <span className="relative z-10 cursor-pointer ">Sign out</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></div>
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}

          <Link
            href="#shop"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 px-5 py-2.5 text-sm font-bold tracking-wide text-red-900 transition hover:from-amber-300 hover:to-yellow-400 hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
          >
            Find Treasure
            <span aria-hidden="true" className="text-lg animate-bounce">⚡</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-amber-300/40 text-amber-100 transition hover:border-amber-300 hover:bg-amber-400/20 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 lg:hidden"
          aria-label="Toggle pirate navigation menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-6 w-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </nav>
    </header>
  )
}

export default Navbar
