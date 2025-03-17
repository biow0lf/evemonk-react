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

function UniverseCorporationCharacters() {
  let id = 1000001;

  console.log(id);

  const { loading, error, data } = useQuery(GET_CORPORATION_CHARACTERS_BY_ID, {
    variables: { id },
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  console.log(data);

  return (
    <>
      Loading!...
    </>
  )
}

export default UniverseCorporationCharacters;
