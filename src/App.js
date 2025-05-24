import "./App.css"
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom"
import Body from "./components/Body"
import EventInfo from "./components/EventInfo"
import CreateEvent from "./components/CreateEvent"

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Body />}></Route>
          <Route path="/Events" element={<EventInfo/>}></Route>
          <Route path="/create-event" element={<CreateEvent/>}></Route>
        </Routes>
        
      </div>
    </Router>
  )
}

export default App
