import { getAuth } from "firebase/auth"
import { useEffect, useState } from "react"


function Profile() {
  const [user, setUser] = useState(null) 
  const auth = getAuth()
  useEffect(()=>{
    setUser(auth.currentUser);

  },[])
  return (
    <div>
      {user ? <h1>{user.displayName}</h1>: 'not logged in'}
    </div>
  )
}
export default Profile