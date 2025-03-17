import { gql, useQuery } from "@apollo/client";

const GET_CORPORATION_CHARACTERS_BY_ID = gql`
  query getCorporationCharactersByID($id: ID!) {
    corporation(id: $id) {
      characters {
        edges {
          node {
            id
            name
          }
        }
      }
    }
  }
`;

function UniverseCorporationCharacters({ id }) {
  console.log(id);

  const { loading, error, data } = useQuery(GET_CORPORATION_CHARACTERS_BY_ID, {
    variables: { id },
  });

  if (loading) {
    return (
      <>
        <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8">
          <h4 className="text-center">Loading...</h4>
        </div>
      </>
    )
  }

  if (error) return `Error! ${error.message}`;

  console.log(data);

  return (
    <>
      <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8">
        <h4 className="text-center">Members ()</h4>

        <table className="table table-dark table-striped table-bordered">
          <thead>
            <tr>
              <th colSpan="2" className="text-center">Name</th>
            </tr>
          </thead>

          <tbody>
            {data.corporation.characters.edges.map((edge) => (
              <tr key={edge.node.id}>
                <td className="align-middle text-center border-end-0 m-0 p-2">
                  dsadsa
                </td>
                <td className="align-middle text-break border-start-0">
                  {edge.node.name}
                </td>
              </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default UniverseCorporationCharacters;
