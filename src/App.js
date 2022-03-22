import './App.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HelloWorld from "./components/HelloWorld";
import Labs from "./components/Labs";
import {BrowserRouter, Route, Routes}
    from "react-router-dom";
import HomeScreen from "./components/Tuiter/HomeScreen/HomeScreen";
import ExploreScreen from "./components/Tuiter/ExploreScreen/ExploreScreen";

function App() {
  return (
      <BrowserRouter>
      <div className="container">
          <Routes>
              <Route path="/hello"
                     element={<HelloWorld/>}/>
              <Route path="/"
                     element={<Labs/>}/>
              <Route path="/labs"
                     element={<Labs/>}/>
              <Route path="/tuiter/home" element={<HomeScreen/>}/>
              <Route path="/tuiter/explore" element={<ExploreScreen/>}/>
          </Routes>
      </div>
      </BrowserRouter>
  );
}
export default App;
