import React from "react";
import { useState } from "react"


function Toggle() {
  let [isOn, setIsOn] = useState(false)

  function handleOnClick(){
    setIsOn((isOn) => !isOn)
  }

  const color = isOn ? "red" : "white"

  return <button onClick={handleOnClick} style={{background: color}} >{isOn ? "On" : "Off"}</button>;
}

export default Toggle;
