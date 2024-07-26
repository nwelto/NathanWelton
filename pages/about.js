import NavBar from '../components/NavBar';

const About = () => (
  <>
    <NavBar />
    <section className="text-center flex flex-col justify-center items-center h-screen p-8 max-w-4xl mx-auto pt-20">
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
  </>
);

export default About;
