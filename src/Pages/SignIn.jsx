import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import {getAuth,  signInWithEmailAndPassword  } from 'firebase/auth'

function SignIn() {

  const navigate = useNavigate()
  const [showPassword, setShowpassword]= useState(false)
  const [formData, setFormData] = useState({
    email:'',
    password:''
  })

  const {email, password} = formData

  const onChange = (e)=>{
    setFormData((prevState)=>({
      ...prevState,
      [e.target.id]: e.target.value

    }))

  }

  const handleSubmit = async (e)=>{
    e.preventDefault()

    try {
      const auth = getAuth()
      const UserCredentials = await signInWithEmailAndPassword(auth, email, password)

      if(UserCredentials.user){
        navigate('/')
      }
      
    } catch (error) {
      
    }

  }
  return (
    <>
    <div className="mx-auto max-w-[80%] flex-col space-y-2 justify-center items-center">
      <h1>Welcome back</h1>

      <form onSubmit={handleSubmit}>

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

         <button>sign in</button>

      </form>

      <Link to='/signup'>
        Sign up instead
      </Link>

    </div>
    
    </>
  )
}
export default SignIn