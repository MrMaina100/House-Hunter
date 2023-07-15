import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./Components/Header"
import Explore from "./Pages/Explore"
import Offers from "./Pages/Offers"
import Profile from "./Pages/Profile"
import SignUp from "./Pages/SignUp"
import SignIn from "./Pages/SignIn"
import ForgotPassword from "./Pages/ForgotPassword"

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Explore/>}/>
        <Route path="/offers" element={<Offers/>}/>
        <Route path="/profile" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/forgotpassword" element={<ForgotPassword/>}/>

      </Routes>      
        <Header/>
    </Router>
     
    </>
  )
}

export default App
