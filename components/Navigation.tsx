'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-blue-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold">
            ProServices
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="hover:text-orange-500 transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="hover:text-orange-500 transition-colors duration-200"
            >
              Services
            </Link>
            <Link
              href="/team"
              className="hover:text-orange-500 transition-colors duration-200"
            >
              Team
            </Link>
            <Link
              href="/case-studies"
              className="hover:text-orange-500 transition-colors duration-200"
            >
              Case Studies
            </Link>
            <Link
              href="/testimonials"
              className="hover:text-orange-500 transition-colors duration-200"
            >
              Testimonials
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md hover:bg-blue-800 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <Link
                href="/"
                className="py-2 hover:text-orange-500 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/services"
                className="py-2 hover:text-orange-500 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/team"
                className="py-2 hover:text-orange-500 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Team
              </Link>
              <Link
                href="/case-studies"
                className="py-2 hover:text-orange-500 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Case Studies
              </Link>
              <Link
                href="/testimonials"
                className="py-2 hover:text-orange-500 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Testimonials
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}