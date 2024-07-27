import PropTypes from 'prop-types';
import Image from 'next/image';

const ProjectCard = ({ project }) => (
  <div className="bg-gray-700 p-4 rounded-lg shadow-lg flex flex-col items-center">
    <div className="relative w-full h-40">
      <Image src={project.image} alt={project.title} layout="fill" objectFit="cover" className="rounded-t-lg" />
    </div>
    <h3 className="text-xl font-bold text-white mt-2 text-center">{project.title}</h3>
    <p className="text-gray-300 text-center">{project.description}</p>
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-400 underline mt-2 block text-center"
    >
      Visit Deployed Site
    </a>
  </div>
);

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectCard;
