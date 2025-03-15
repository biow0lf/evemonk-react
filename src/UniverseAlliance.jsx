import { useParams } from "react-router";

import { gql, useQuery } from "@apollo/client";

import Layout from "./Layout";

const GET_ALLIANCE_BY_ID = gql`
  query getAllianceByID($id: ID!) {
    alliance(id: $id) {
      id
      name
      ticker
      charactersCount
      icon {
        small
        large
      }
    }
  }
`;

function UniverseAlliance() {
  let { id } = useParams();

  console.log(id);

  const { loading, error, data } = useQuery(GET_ALLIANCE_BY_ID, {
    variables: { id },
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  console.log(data);

  return (
    <>
      <Layout>
        <div className="row" key={data.alliance.id}>
          <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
            <h4 className="text-center text-break">
              Alliance: {data.alliance.name}
            </h4>

            <div className={"card"}>
              <ul className={"list-group list-group-flush"}>
                <li className={"list-group-item text-center"}>
                  <img
                    src={data.alliance.icon.large}
                    alt={data.alliance.name}
                    className={"rounded border"}
                    width={"130"}
                    height={"130"}
                    loading={"lazy"}
                  />
                </li>

                <li className={"list-group-item text-break"}>
                  Ticker: {data.alliance.ticker}
                </li>

                <li className={"list-group-item"}>
                  Members: {data.alliance.charactersCount}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default UniverseAlliance;
