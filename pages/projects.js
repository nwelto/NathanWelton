import NavBar from '../components/NavBar';
import ProjectCard from '../components/cards/ProjectCard';

const projects = [
  {
    id: '1', title: 'Project 1', description: 'Description of project 1', image: '/images/project1.png',
  },
  {
    id: '2', title: 'Project 2', description: 'Description of project 2', image: '/images/project2.png',
  },
  // Add more projects as needed
];

const Projects = () => (
  <>
    <NavBar />
    <div className="text-center flex flex-col justify-center items-center h-screen p-8 max-w-md mx-auto pt-20">
      <h1 className="text-4xl font-bold mb-4 text-white">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  </>
);

export default Projects;
