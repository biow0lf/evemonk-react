import TopAlliances from "./TopAlliances.jsx";
import TopCorporations from "./TopCorporations.jsx";

import './App.css'

function App() {
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

export default App
