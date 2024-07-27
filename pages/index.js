/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin, faGithub, faReact, faHtml5, faJsSquare,
} from '@fortawesome/free-brands-svg-icons';
import {
  SiFirebase, SiDotnet, SiNextdotjs, SiCsharp, SiPostman, SiPostgresql, SiVisualstudiocode, SiVisualstudio, SiNodedotjs,
} from 'react-icons/si';
import Image from 'next/image';
import NavBar from '../components/NavBar';
import ProjectCard from '../components/cards/ProjectCard';

const projects = [
  {
    title: 'DM Campaign Manager',
    description: 'A web app for managing Dungeons & Dragons campaigns.',
    link: 'https://dmcm.netlify.app/',
    image: '/dmcm.png',
  },
];

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
      <header id="header" className="text-white text-4xl md:text-6xl font-bold my-8 text-center transition-opacity duration-1000">
        Nathan Welton
      </header>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-2 p-4 max-w-6xl w-full mx-auto">
        <Link href="#about" passHref>
          <a className="col-span-1 bg-gray-900 text-white rounded-3xl p-4 text-center flex justify-center items-center cursor-pointer text-lg font-bold">
            About
          </a>
        </Link>
        <Link href="#projects" passHref>
          <a className="col-span-1 bg-white text-black rounded-3xl p-4 text-center flex justify-center items-center cursor-pointer text-lg font-bold">
            Projects
          </a>
        </Link>
        <Link href="#technologies-resume" passHref>
          <a className="col-span-1 bg-blue-400 text-black rounded-3xl p-4 text-center flex justify-center items-center cursor-pointer text-lg font-bold">
            Technologies
          </a>
        </Link>
        <Link href="#technologies-resume" passHref>
          <a className="col-span-1 bg-green-400 text-black rounded-3xl p-4 text-center flex justify-center items-center cursor-pointer text-lg font-bold">
            Resume
          </a>
        </Link>
        <Link href="#contact" passHref>
          <a className="col-span-2 md:col-span-1 bg-yellow-400 text-black rounded-3xl p-4 text-center flex justify-center items-center cursor-pointer text-lg md:text-2xl font-bold">
            Contact
          </a>
        </Link>
      </div>

      <hr className="w-4/5 border-t border-purple-600 mx-auto mt-8 mb-20" />

      <section id="about" className="section opacity-0 transition-opacity duration-1000 text-center flex flex-col justify-center items-center h-auto md:h-screen p-4 md:p-8 max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center bg-gray-700 text-white rounded-3xl p-4 md:p-8">
          <div className="md:w-1/3 w-full flex justify-center md:justify-start mb-4 md:mb-0">
            <Image src="/nw-pic.jpg" alt="Nathan Welton" width={256} height={256} className="rounded-full object-cover" />
          </div>
          <div className="md:w-2/3 w-full md:pl-8">
            <h1 className="text-2xl md:text-4xl font-bold mb-4">About Me</h1>
            <p className="text-base md:text-lg mb-4">
              I’m a passionate and driven software developer who started diving into the world of coding in January 2023. My background in leadership and strategic roles has given me a unique perspective on problem-solving and teamwork, which I now bring to my software projects.
            </p>
            <p className="text-base md:text-lg mb-2">
              {'Since starting my journey, I\'ve been exploring everything from front-end frameworks to back-end systems, focusing on creating impactful software solutions that enhance user experiences and make a difference in people\'s lives.'}
            </p>
          </div>
        </div>
      </section>

      <hr className="w-4/5 border-t border-purple-600 mx-auto mt-20 mb-20" />

      <section id="projects" className="section opacity-0 transition-opacity duration-1000 h-auto md:h-screen flex flex-col justify-center items-center p-4 md:p-8">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white">Projects</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <hr className="w-4/5 border-t border-purple-600 mx-auto mt-20 mb-20" />

      <section id="technologies-resume" className="section opacity-0 transition-opacity duration-1000 flex flex-col md:flex-row justify-center items-center p-4 md:p-8">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl margin-bottom:100px md:text-4xl font-bold mb-4 text-white">Technologies</h2>
          <div className="tight-grid">
            <FontAwesomeIcon icon={faReact} className="tech-icon text-blue-400" />
            <FontAwesomeIcon icon={faHtml5} className="tech-icon text-orange-500" />
            <FontAwesomeIcon icon={faJsSquare} className="tech-icon text-yellow-500" />
            <SiFirebase className="tech-icon text-yellow-400" />
            <SiDotnet className="tech-icon text-purple-500" />
            <SiNextdotjs className="tech-icon text-white" />
            <SiCsharp className="tech-icon text-purple-600" />
            <SiPostman className="tech-icon text-orange-500" />
            <SiPostgresql className="tech-icon text-blue-500" />
            <SiVisualstudiocode className="tech-icon text-blue-500" />
            <SiVisualstudio className="tech-icon text-purple-700" />
            <SiNodedotjs className="tech-icon text-green-500" />
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center mt-8 md:mt-0">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white">Resume</h2>
          <a
            href="/Nathan Welton - Software Developer.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center flex justify-center items-center cursor-pointer"
          >
            <Image src="/resumebtn.png" alt="Resume Thumbnail" width={200} height={250} className="rounded-lg" />
          </a>
        </div>
      </section>

      <hr className="w-4/5 border-t border-purple-600 mx-auto mt-20 mb-20" />

      <section id="contact" className="section opacity-0 transition-opacity duration-1000 h-auto md:h-screen flex flex-col justify-center items-center p-4 md:p-8">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white">Contact</h2>
        <p className="text-base md:text-lg text-white">Phone: 573-380-5105</p>
        <p className="text-base md:text-lg text-white">Email: nathopp@gmail.com</p>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-4">
          <a
            href="https://www.linkedin.com/in/nwelto/"
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

      <hr className="w-4/5 border-t border-purple-600 mx-auto mt-20 mb-20" />
    </div>
  );
}

export default Home;
