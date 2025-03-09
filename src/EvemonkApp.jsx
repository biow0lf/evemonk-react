import TopAlliances from "./TopAlliances.jsx";
import TopCorporations from "./TopCorporations.jsx";

import './EvemonkApp.css'

function EvemonkApp() {
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

export default EvemonkApp
