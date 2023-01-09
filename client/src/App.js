import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import Header from './components/Header';

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Header />
      </ApolloProvider>
    </>
  );
}

export default App;
