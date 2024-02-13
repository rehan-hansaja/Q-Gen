import {Routes,  Route} from "react-router-dom";
import Homepage from './pages/Homepage'
import Navbar from "./components/Navbar";
import Study from './pages/Study'
import Contact from './pages/Contact'
import Pricing from './pages/Pricing'
import Login from './pages/Login'
import SignUp from './pages/SignUp'

function App() {
  return (
    <>
      <Navbar />
      <div className="navigation">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Study" element={<Study />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </div>

    </>
       );
  
}

export default App;



