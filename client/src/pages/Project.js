import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Spinner from '../components/Spinner';
import { GET_PROJECT } from '../queries/projectQueries';

const Project = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PROJECT, {
    variables: { id },
  });
  console.log(data);

  if (loading) return <Spinner />;
  if (error) return <p>Something went wrong.</p>;

  return (
    <>
      {!loading && !error && data.project && (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{data.project.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              {data.project.client?.name}
            </h6>
            <p className="card-text">{data.project.description}</p>
            <p className="card-text">
              <small className="text-muted">{data.project.status}</small>
            </p>
            <Link
              to={`/projects/${data.project.id}/edit`}
              className="card-link"
            >
              Edit
            </Link>
            <Link
              to={`/projects/${data.project.id}/delete`}
              className="card-link"
            >
              Delete
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Project;
