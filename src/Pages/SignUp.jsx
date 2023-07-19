import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import {db} from '../Firebase.config'
import { setDoc, doc, serverTimestamp } from "firebase/firestore"
import { toast } from "sonner"
function SignUp() {
  const navigate = useNavigate()
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

   const handleSubmit = async (e) =>{
      e.preventDefault()

      try {
        const auth = getAuth()
        const userCredentials = await createUserWithEmailAndPassword(auth,email,password)
        const user = userCredentials.user
        updateProfile(auth.currentUser,{
          displayname:name
        })

        //save user to firestore
        const formDataCopy = {...formData}
        delete formDataCopy.password
        formDataCopy.timestamp = serverTimestamp()
        await setDoc(doc(db, 'users', user.uid), formDataCopy)
        
        navigate('/')
      } catch (error) {
        toast.error('oops something went wrong,check email or password')
        
      }
    }
  return (
    <>
    <div className="mx-auto max-w-[80%] flex-col space-y-2 justify-center items-center">
      <h1>Welcome back</h1>

      <form onSubmit={handleSubmit}>

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

         <button type="submit">sign me up</button>

      </form>

      

      <Link to='/signin'>
        Sign in instead
      </Link>

    </div>
    
    </>
  )
}
export default SignUp