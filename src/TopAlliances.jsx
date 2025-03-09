import { gql, useQuery } from "@apollo/client";

import './TopAlliances.css';

const GET_TOP_ALLIANCES = gql`
  query getAlliances {
    alliances(first: 2) {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`;

function TopAlliances() {
  const { loading, error, data } = useQuery(GET_TOP_ALLIANCES);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  console.log(data);

  return (
    <>
      <h1>Top alliances</h1>

      <table>
        <tbody>
          {data.alliances.edges.map((edge) => (
            <tr key={edge.node.id}>
              <td><a href={edge.node.id}>{edge.node.name}</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default TopAlliances
