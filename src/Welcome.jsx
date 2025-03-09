import './Welcome.css'

import TopAlliances from "./TopAlliances.jsx";
import TopCorporations from "./TopCorporations.jsx";

function Welcome() {
  return (
    <>
      <div className={"container"}>
        <div className={"row"}>
          <TopAlliances />

          <TopCorporations />
        </div>
      </div>
    </>
  )
}

export default Welcome
