/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import NavBar from '../components/NavBar';

function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      const screenPosition = window.innerHeight / 1.3;

      sections.forEach((section) => {
        const sectionPosition = section.getBoundingClientRect().top;

        if (sectionPosition < screenPosition) {
          section.classList.add('fade-in');
        } else {
          section.classList.remove('fade-in');
        }
      });

      const header = document.getElementById('header');
      const navbar = document.getElementById('navbar');
      const aboutSection = document.getElementById('about');
      const headerPosition = header.getBoundingClientRect().top;

      if (headerPosition < -100) {
        navbar.classList.add('fade-in');
        header.classList.add('fade-out');
        aboutSection.classList.add('fade-in');
      } else {
        navbar.classList.remove('fade-in');
        header.classList.remove('fade-out');
        aboutSection.classList.remove('fade-in');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <NavBar />
      <header id="header" className="text-white text-6xl font-bold my-8 text-center transition-opacity duration-1000">
        Nathan Welton
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 max-w-6xl w-full mx-auto">
        <Link href="#about" passHref>
          <a className="col-span-2 md:col-span-1 bg-gray-900 text-white rounded-3xl p-8 text-center flex justify-center items-center cursor-pointer text-2xl font-bold">
            About
          </a>
        </Link>
        <Link href="#projects" passHref>
          <a className="col-span-2 md:col-span-1 bg-white text-black rounded-3xl p-8 text-center flex justify-center items-center cursor-pointer text-2xl font-bold">
            Projects
          </a>
        </Link>
        <Link href="#contact" passHref>
          <a className="col-span-2 bg-yellow-400 text-black rounded-3xl p-8 text-center flex justify-center items-center cursor-pointer text-2xl font-bold">
            Contact
          </a>
        </Link>
      </div>

      <section id="about" className="section opacity-0 transition-opacity duration-1000 text-center flex flex-col justify-center items-center h-screen p-8 max-w-4xl mx-auto pt-20">
        <div className="flex flex-col md:flex-row items-center bg-gray-700 text-white rounded-3xl p-8">
          <div className="md:w-1/3 w-full flex justify-center md:justify-start mb-8 md:mb-0">
            <img src="/nw-pic.jpg" alt="Nathan Welton" className="rounded-full w-64 h-64 object-cover" />
          </div>
          <div className="md:w-2/3 w-full md:pl-8">
            <h1 className="text-4xl font-bold mb-4">About Me</h1>
            <p className="text-lg mb-4">
              I’m a passionate and driven software developer who started diving into the world of coding in January 2023. My background in leadership and strategic roles has given me a unique perspective on problem-solving and teamwork, which I now bring to my software projects.
            </p>
            <p className="text-lg mb-2">
              {'Since starting my journey, I\'ve been exploring everything from front-end frameworks to back-end systems, focusing on creating impactful software solutions that enhance user experiences and make a difference in people\'s lives.'}
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="section opacity-0 transition-opacity duration-1000 h-screen flex flex-col justify-center items-center p-8">
        <h2 className="text-4xl font-bold mb-4 text-white">Projects</h2>
        {/* Add your projects content here */}
      </section>

      <section id="contact" className="section opacity-0 transition-opacity duration-1000 h-screen flex flex-col justify-center items-center p-8">
        <h2 className="text-4xl font-bold mb-4 text-white">Contact</h2>
        <p className="text-lg text-white">Phone: 573-380-5105</p>
        <p className="text-lg text-white">Email: nathopp@gmail.com</p>
        <div className="flex space-x-4 mt-4">
          <a
            href="https://www.linkedin.com/in/nathan-j-welton/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
            aria-label="LinkedIn Profile"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>

          <a
            href="https://github.com/nwelto"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
            aria-label="GitHub Profile"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>

        </div>
      </section>
    </div>
  );
}

export default Home;
