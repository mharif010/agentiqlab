'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Use Cases', href: '#use-cases' },
    { name: 'FAQ', href: '#faq' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-neutral-800/50 glass">
      <nav className="max-container flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-500 to-dark-500 flex items-center justify-center">
            <span className="text-white font-bold text-lg">A</span>
          </div>
          <span className="font-bold text-lg hidden sm:inline group-hover:text-accent-400 transition-colors">Agentiq Lab</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm text-text-secondary hover:text-accent-400 transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-text transition-colors">
            Sign In
          </button>
          <button className="px-4 py-2 text-sm font-medium bg-accent-500 text-dark rounded-lg hover:bg-accent-600 transition-colors">
            Start Free Trial
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 hover:bg-neutral-800 rounded-lg transition-colors"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden border-t border-neutral-800/50 bg-dark-900/50 backdrop-blur"
        >
          <div className="max-container py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm text-text-secondary hover:text-accent-400 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="flex flex-col gap-2 pt-2 border-t border-neutral-800/50">
              <button className="w-full px-4 py-2 text-sm font-medium text-text-secondary hover:text-text transition-colors text-left">
                Sign In
              </button>
              <button className="w-full px-4 py-2 text-sm font-medium bg-accent-500 text-dark rounded-lg hover:bg-accent-600 transition-colors">
                Start Free Trial
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  )
}

export default Header
