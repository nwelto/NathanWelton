/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <header className="text-white text-6xl font-bold my-8">
        Nathan Welton
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 max-w-6xl w-full">
        <Link href="/projects" passHref>
          <a className="col-span-2 md:col-span-1 bg-white text-black rounded-3xl p-8 text-center flex justify-center items-center cursor-pointer text-2xl font-bold">
            Projects
          </a>
        </Link>
        <Link href="/about" passHref>
          <a className="col-span-2 md:col-span-1 bg-gray-900 text-white rounded-3xl p-8 text-center flex justify-center items-center cursor-pointer text-2xl font-bold">
            About
          </a>
        </Link>
        <Link href="/contact" passHref>
          <a className="col-span-2 bg-yellow-400 text-black rounded-3xl p-8 text-center flex justify-center items-center cursor-pointer text-2xl font-bold">
            Contact
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Home;
