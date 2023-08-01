import { useState } from "react"
import { getAuth, sendPasswordResetEmail } from "firebase/auth"
import { Link } from "react-router-dom"
import { toast } from "sonner"

function ForgotPassword() {
  const [formData, setFormData] = useState()

  const handleResetSumbit = async (e)=>{
    e.preventDefault()
    try {
      const auth = getAuth()
      await sendPasswordResetEmail(auth, formData)
      toast.success('check email for password reset')            
    } catch (error) {
      toast.error('something went wrong')
      
    }

  }
  return (
    <>
    <h1>reset password</h1>
    <form onSubmit={handleResetSumbit}>
      <input
       type="text"
       placeholder="enter your email for reset"
       value={formData}
       onChange={(e)=>setFormData(e.target.value)}
       id="formData"
        />

        <button>send it</button>
    </form>
    
    </>
    
  )
}
export default ForgotPassword