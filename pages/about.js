import NavBar from '../components/NavBar';

const About = () => (
  <>
    <NavBar />
    <div className="text-center flex flex-col justify-center items-center h-screen p-8 max-w-md mx-auto pt-20">
      <h1 className="text-4xl font-bold mb-4 text-white">About Me</h1>
      <p className="text-lg mb-2 text-white">This is the about page of my portfolio.</p>
      <p className="text-lg mb-2 text-white">Here you can find more information about me and my background.</p>
    </div>
  </>
);

export default About;
