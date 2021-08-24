import React from "react"
import ReactDOM from "react-dom"
//component file
// import TodoContainer from "./components/TodoContainer"
// import "./App.css"
import TodoContainer from "./functionBased/components/TodoContainer"
import "./functionBased/App.css"

<React.StrictMode>
  <TodoContainer />
</React.StrictMode>
ReactDOM.render(<TodoContainer />, document.getElementById("root"))