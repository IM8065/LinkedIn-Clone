import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";

import Homepage from "./components/homepage/Homepage";
import MainHeader from "./components/MainHeader/MainHeader";
import MyNetworkPage from "./components/MyNetworkPage/MyNetworkPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainHeader />
        <Routes>
          {/* <Route path="/" element={}> */}
          <Route path="/" element={<Homepage />} />
          <Route path="mynetwork" element={<MyNetworkPage />} />
          <Route path="*" element={<div>404 not found</div>} />
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
