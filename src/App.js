import React from "react";
import Covid from "./Covid";
import Car from "./components/Car";
import Props1 from "./components/Props1";
import Netprops from "./components/Netprops";
import Updateprops from "./components/Updateprops";
import Constructor from "./components/Constructor";
import DerivedState from "./components/DerivedState";
import ComDidMount from "./ComDidMount";
function App() {
  return(
  <>
    <Covid/>
    <Car/>
    <Props1/>
    <Netprops />
    <Netprops />
    <Constructor />

    <DerivedState/>

    <ComDidMount />

    <Updateprops />

  
    
  </>
  )
}
export default App;