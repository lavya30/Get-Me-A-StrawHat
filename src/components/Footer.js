import React from 'react'
import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const footerLinks = {
    adventure: [
      { label: 'Grand Line', href: '#grand-line' },
      { label: 'New World', href: '#new-world' },
      { label: 'East Blue', href: '#east-blue' },
      { label: 'Treasure Map', href: '#treasure-map' },
    ],
    crew: [
      { label: 'Join Pirates', href: '#join' },
      { label: 'Crew Members', href: '#crew' },
      { label: 'Bounties', href: '#bounties' },
      { label: 'Ship Tours', href: '#ship' },
    ],
    support: [
      { label: 'Help Center', href: '#help' },
      { label: 'Contact Us', href: '#contact' },
      { label: 'Shipping Info', href: '#shipping' },
      { label: 'Returns', href: '#returns' },
    ],
  }

  return (
    <footer className="relative mt-16">
      {/* Pirate Ship Waves Effect */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent via-blue-900/20 to-blue-800/40 blur-sm"></div>

      <div className="relative bg-gradient-to-r from-slate-900 via-red-900/90 to-amber-900/80 border-t-4 border-amber-400/60">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-full bg-amber-400 flex items-center justify-center shadow-lg">
                  <img src="/favicon.ico" alt="Straw Hat" className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Straw Hat Pirates</h3>
                  <p className="text-xs text-amber-200 uppercase tracking-wider">Adventure Awaits</p>
                </div>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed mb-4">
                Set sail with the Straw Hat Pirates! Find your perfect hat and join the greatest adventure on the Grand Line.
              </p>

              {/* Social Links */}
              <div className="flex gap-3">
                <a href="#" className="h-9 w-9 rounded-full bg-red-700/50 border border-amber-400/40 flex items-center justify-center text-amber-200 hover:bg-red-600 hover:text-white transition-all duration-200">
                  <span className="text-sm font-bold">🏴‍☠️</span>
                </a>
                <a href="#" className="h-9 w-9 rounded-full bg-red-700/50 border border-amber-400/40 flex items-center justify-center text-amber-200 hover:bg-red-600 hover:text-white transition-all duration-200">
                  <span className="text-sm font-bold">⚓</span>
                </a>
                <a href="#" className="h-9 w-9 rounded-full bg-red-700/50 border border-amber-400/40 flex items-center justify-center text-amber-200 hover:bg-red-600 hover:text-white transition-all duration-200">
                  <span className="text-sm font-bold">🗺️</span>
                </a>
              </div>
            </div>

            {/* Adventure Links */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-amber-300 mb-4">
                🗺️ Adventures
              </h4>
              <ul className="space-y-2">
                {footerLinks.adventure.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-300 hover:text-amber-200 transition-colors duration-200 hover:pl-1"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Crew Links */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-amber-300 mb-4">
                👥 Crew
              </h4>
              <ul className="space-y-2">
                {footerLinks.crew.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-300 hover:text-amber-200 transition-colors duration-200 hover:pl-1"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-amber-300 mb-4">
                ⚓ Support
              </h4>
              <ul className="space-y-2">
                {footerLinks.support.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-300 hover:text-amber-200 transition-colors duration-200 hover:pl-1"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter/CTA Section */}
          <div className="mt-12 pt-8 border-t border-amber-400/30">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="text-lg font-bold text-white mb-2">
                  Ready for the Adventure? 🏴‍☠️
                </h4>
                <p className="text-sm text-gray-300">
                  Join our crew and get updates on new treasures and adventures!
                </p>
              </div>
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email..."
                  className="px-4 py-2 rounded-full bg-slate-800/50 border border-amber-400/40 text-white placeholder-gray-400 focus:outline-none focus:border-amber-300 focus:ring-2 focus:ring-amber-400/20 min-w-64"
                />
                <button className="px-6 py-2 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 text-red-900 font-bold hover:from-amber-400 hover:to-yellow-400 transition-all duration-200 hover:-translate-y-0.5">
                  Set Sail! ⚡
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-amber-400/20 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-gray-400">
                © {currentYear} <span className="text-amber-300 font-semibold">Straw Hat Pirates</span> - All Adventures Reserved
              </p>
              <div className="flex items-center gap-6 text-xs text-gray-500">
                <Link href="#privacy" className="hover:text-amber-300 transition-colors">Privacy Policy</Link>
                <Link href="#terms" className="hover:text-amber-300 transition-colors">Terms of Adventure</Link>
                <Link href="#cookies" className="hover:text-amber-300 transition-colors">Cookie Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
