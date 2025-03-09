import { useParams } from "react-router";

import {
  gql,
  useQuery
} from "@apollo/client";

import './UniverseAlliance.css'

const GET_ALLIANCE_BY_ID = gql`
  query getAllianceByID($id: ID!) {
    alliance(id: $id) {
      id
      name
    }
  }
`;

function UniverseAlliance() {
  let { id } = useParams();

  console.log(id)

  const { loading, error, data } = useQuery(GET_ALLIANCE_BY_ID, {
    variables: { id }
  });

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  console.log(data)

  return (
    <>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
          <h1>Universe Alliance</h1>
        </div>

      </div>
    </>
  )
}

export default UniverseAlliance
