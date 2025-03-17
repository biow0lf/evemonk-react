import { useParams } from "react-router";

import { gql, useQuery } from "@apollo/client";

import Layout from "./Layout";

const GET_CORPORATION_BY_ID = gql`
  query getCorporationByID($id: ID!) {
    corporation(id: $id) {
      id
      name
      ticker
      memberCount
      icon {
        small
        large
      }
    }
  }
`;

function UniverseCorporation() {
  let { id } = useParams();

  console.log(id);

  const { loading, error, data } = useQuery(GET_CORPORATION_BY_ID, {
    variables: { id },
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  console.log(data);

  return (
    <>
      <Layout>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
            <h4 className="text-center text-break">Corporation: {data.corporation.name}</h4>

            <div className="card">
              <ul className="list-group list-group-flush">
                <li className="list-group-item text-center">
                  <img
                    src={data.corporation.icon.large}
                    alt={data.corporation.name}
                    className={"rounded border"}
                    width={"130"}
                    height={"130"}
                    loading={"lazy"}
                  />
                </li>

                <li className="list-group-item text-break">Alliance:</li>

                <li className="list-group-item text-break">
                  Ticker: {data.corporation.ticker}
                </li>

                <li className="list-group-item">
                  Members: {data.corporation.memberCount}
                </li>

                <li className="list-group-item text-break">
                  CEO: TODO
                </li>
              </ul>

              <p className="card-text text-center">
                <small className="text-muted">
                  Last updated: TODO
                </small>
              </p>
            </div>

          </div>
        </div>
      </Layout>
    </>
  )
}

export default UniverseCorporation;
