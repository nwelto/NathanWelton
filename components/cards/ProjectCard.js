import PropTypes from 'prop-types';

const ProjectCard = ({ project }) => (
  <div className="bg-gray-700 p-4 rounded-lg shadow-lg">
    <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-t-lg" />
    <h3 className="text-xl font-bold text-white mt-2">{project.title}</h3>
    <p className="text-gray-300">{project.description}</p>
  </div>
);

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectCard;
