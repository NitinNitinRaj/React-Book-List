import "./styles/index.css"
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { Provider } from "./context/books"

const rootElement = document.getElementById("root")
const root = ReactDOM.createRoot(rootElement)

root.render(
  <Provider value={5}>
    <App />
  </Provider>
)
