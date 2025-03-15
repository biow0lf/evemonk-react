import { gql, useQuery } from "@apollo/client";

const GET_TOP_CORPORATIONS = gql`
  query getCorporations {
    corporations(first: 15) {
      edges {
        node {
          id
          name
          memberCount
          icon {
            small
          }
        }
      }
    }
  }
`;

function TopCorporations() {
  const { loading, error, data } = useQuery(GET_TOP_CORPORATIONS);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  console.log(data);

  return (
    <>
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
        <h4 className="text-center">Corporations</h4>

        <table className={"table table-dark table-striped table-bordered"}>
          <thead>
            <tr>
              <th colSpan="2" className="text-center">
                Name
              </th>
              <th className="text-end">Members</th>
            </tr>
          </thead>

          <tbody>
            {data.corporations.edges.map((edge) => (
              <tr key={edge.node.id}>
                <td className="text-center align-middle border-end-0 m-0 p-2">
                  <img
                    src={edge.node.icon.small}
                    alt={edge.node.name}
                    className={"rounded border"}
                    width={"34"}
                    height={"34"}
                    loading={"lazy"}
                  />
                </td>
                <td className="text-break align-middle border-start-0">
                  <a href={edge.node.id}>{edge.node.name}</a>
                </td>
                <td className="text-end align-middle">
                  {edge.node.memberCount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TopCorporations;
