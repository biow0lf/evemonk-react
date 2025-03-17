import { useParams } from "react-router";

import Layout from "./Layout";

function UniverseCorporation() {
  let { id } = useParams();

  console.log(id);

  return (
    <>
      <Layout></Layout>
    </>
  )
}

export default UniverseCorporation;
