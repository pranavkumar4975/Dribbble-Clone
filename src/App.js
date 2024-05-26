import { BrowserRouter, Route, Routes } from "react-router-dom";

import Landingpage from "./Components/Landingpage.js"
import LoginSignup from "./Components/LoginSignup.js";
import Signup from "./Components/Signup.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Landingpage}></Route>
        <Route path="/loginsignup" Component={LoginSignup}></Route>
        <Route path="/signup" Component={Signup}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
