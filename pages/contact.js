import NavBar from '../components/NavBar';

const Contact = () => (
  <>
    <NavBar />
    <div className="text-center flex flex-col justify-center items-center h-screen p-8 max-w-md mx-auto pt-20">
      <h1 className="text-4xl font-bold mb-4 text-white">Contact Me</h1>
      <p className="text-lg mb-2 text-white">This is the contact page of my portfolio.</p>
      <p className="text-lg mb-2 text-white">Feel free to reach out to me via the contact form below.</p>
      {/* Contact form or contact details go here */}
    </div>
  </>
);

export default Contact;
