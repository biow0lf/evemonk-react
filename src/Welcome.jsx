import TopAlliances from "./TopAlliances";
import TopCorporations from "./TopCorporations";
import Layout from "./Layout";

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
