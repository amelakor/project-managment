import { useQuery } from '@apollo/client';
import { GET_CLIENTS } from '../queries/clientQueries';
import Spinner from './Spinner';

import ClientRow from './ClientRow';

const Clients = () => {
  const { data, loading, error } = useQuery(GET_CLIENTS);
  console.log(data, loading, error);

  if (loading) return <Spinner />;
  if (error) return `Something went wrong: ${error.message}`;

  return (
    <>
      {!loading && !error && data && (
        <table className="table table-hover mt-3">
          <thead className="bg-primary table-dark">
            <tr className="font-weight-bold">
              <td>Name</td>
              <td>Email</td>
              <td>Phone</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {data.clients.map(client => (
              <ClientRow key={client.id} client={client} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Clients;
