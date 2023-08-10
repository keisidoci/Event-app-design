import "./App.css"
import {
  BrowserRouter as Router,
  Route,
  Routes,
  withRouter,
  Redirect,
} from "react-router-dom"
import Nav from "./layout/Nav"
import Search from "./components/Search"
import Body from "./components/Body"
import EventInfo from "./components/EventInfo"

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Body />}></Route>
          <Route path="/Events" element={<EventInfo/>}></Route>
        </Routes>
        
      </div>
    </Router>
  )
}

export default App
