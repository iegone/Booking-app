import React from 'react'

export default function Header() {
  return (
    <div className="w-full h-16 flex justify-items-center items-center bg-black align-middle">
      <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <a href="/About" className="hover:underline me-4 md:me-6">
            About
          </a>
        </li>
        <li>
          <a href="/Privacy-Policy" className="hover:underline me-4 md:me-6">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="/Licensing" className="hover:underline me-4 md:me-6">
            Licensing
          </a>
        </li>
        <li>
          <a href="/Contact" className="hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
