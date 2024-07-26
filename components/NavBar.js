/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="bg-gray-800 fixed w-full z-10 top-0">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div className="pl-4 flex items-center">
          <Link href="/" passHref>
            <a className="text-white font-bold text-2xl lg:text-4xl">
              Nathan Welton
            </a>
          </Link>
        </div>
        <div className="block lg:hidden pr-4">
          <button
            id="nav-toggle"
            type="button"
            className="flex items-center p-1 text-gray-500 hover:text-white focus:outline-none focus:shadow-outline"
            aria-label="Toggle navigation menu"
          >
            <svg
              className="fill-current h-6 w-6"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 5h16M4 11h16M4 17h16" />
            </svg>
          </button>
        </div>
        <div
          className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-gray-800 z-20"
          id="nav-content"
        >
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            <li className="mr-3">
              <Link href="/" passHref>
                <a className="inline-block py-2 px-4 text-white font-bold no-underline hover:text-shadow-white-glow">
                  Home
                </a>
              </Link>
            </li>
            <li className="mr-3">
              <Link href="/about" passHref>
                <a className="inline-block py-2 px-4 text-white font-bold no-underline hover:text-shadow-white-glow">
                  About
                </a>
              </Link>
            </li>
            <li className="mr-3">
              <Link href="/projects" passHref>
                <a className="inline-block py-2 px-4 text-white font-bold no-underline hover:text-shadow-white-glow">
                  Projects
                </a>
              </Link>
            </li>
            <li className="mr-3">
              <Link href="/contact" passHref>
                <a className="inline-block py-2 px-4 text-white font-bold no-underline hover:text-shadow-white-glow">
                  Contact
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
