import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

function SignUp() {
  const [showPassword, setShowpassword]= useState(false)
  const [formData, setFormData] = useState({
    name:'',
    email:'',
    password:''
  })

  const {name,email, password} = formData

  const onChange = (e)=>{
    setFormData((prevState)=>({
      ...prevState,
      [e.target.id]: e.target.value

    }))

  }
  return (
    <>
    <div className="mx-auto max-w-[80%] flex-col space-y-2 justify-center items-center">
      <h1>Welcome back</h1>

      <form>

         <input type="text"
         value={name} 
         placeholder="Enter name"
         onChange={onChange}
         id="name"

          />

        <input type="email"
         value={email} 
         placeholder="email"
         onChange={onChange}
         id="email"

          />

        <input 
         type={showPassword ? 'text' : 'password'}
         placeholder="password"
         onChange={onChange}
         value={password}
         id="password"         
         />

         <Link to='/forgotpassword'>
          forgot password
         </Link>

      </form>

      <Link to='/signin'>
        Sign in instead
      </Link>

    </div>
    
    </>
  )
}
export default SignUp