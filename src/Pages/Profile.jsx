import { getAuth,updateProfile } from "firebase/auth"
import { useEffect, useState } from "react"
import { useNavigate , Link} from "react-router-dom"
import {updateDoc, doc} from "firebase/firestore"
import {db} from '../Firebase.config'
import { toast } from "sonner"



function Profile() {
  const auth = getAuth()
  const [FormData, setFormData] = useState({
    name: auth.currentUser.displayName || '',
    email: auth.currentUser.email,
  }) 

  const {name, email} = FormData

  const navigate = useNavigate()

  const handleLogout = ()=>{
    auth.signOut()
    navigate('/')
  }

  const [changeDetails,setChangeDetails] = useState(false)

  const onSubmit = async ()=>{
    try {
      if(auth.currentUser.displayName !== name){
        await updateProfile(auth.currentUser,{
          displayName:name
        })
      }
      //update to firestore
      const userRef = doc(db, 'users', auth.currentUser.uid)
      await updateDoc(userRef,{
        name
      })
      
    } catch (error) {
      toast.error('Could not update username')
      
    }
  }


  const handleChange = (e)=>{
    setFormData((prev)=>({
      ...prev,
      [e.target.id]:e.target.value
    }))

  }
   


  

  return (
    <>
     <h1> my profile</h1>
     <div>
      <button onClick={handleLogout}>Log out</button>
     </div>

     <div>
       <p>personal Details</p>
        <p onClick={()=>{
          changeDetails && onSubmit()
          setChangeDetails((prevState)=>!prevState)
        }}>
          {changeDetails ? 'done': 'change'}
          </p>

     </div>

     <div>
      <form className="h-8">
        <input type="text" id="name" value={name} onChange={handleChange}  disabled={!changeDetails}/>
        <input type="text" id="name" value={email} onChange={handleChange} disabled={!changeDetails}  />

      </form>
     </div>
    


     
    </>
  )
}
export default Profile