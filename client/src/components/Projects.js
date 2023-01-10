import Spinner from './Spinner';
import { useQuery } from '@apollo/client';
import { GET_PROJECTS } from '../queries/projectQueries';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  loading && <Spinner />;

  error && <p>Something went wrong</p>;

  return (
    <>
      {data && data.projects.length > 0 ? (
        <div className="row mt-3">
          {data.projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p>No projects found</p>
      )}
    </>
  );
};

export default Projects;
