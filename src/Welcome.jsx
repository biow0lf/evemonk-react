import "./Welcome.css";

import TopAlliances from "./TopAlliances.jsx";
import TopCorporations from "./TopCorporations.jsx";
import Layout from "./Layout.jsx";

function Welcome() {
  return (
    <>
      <Layout>
        <div className={"row"}>
          <TopAlliances />

          <TopCorporations />
        </div>
      </Layout>
    </>
  );
}

export default Welcome;
