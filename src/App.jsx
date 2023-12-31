import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Toaster } from "sonner"
import PrivateRouter from "./Components/PrivateRouter"
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
    <Toaster position="top-center" expand={false} richColors/>
    
    <Router>
      <Routes>
        <Route path="/" element={<Explore/>}/>
        <Route path="/offers" element={<Offers/>}/>
        <Route path="/profile" element={<PrivateRouter/>}>
          <Route path="/profile" element={<Profile/>}/>
        </Route>
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
