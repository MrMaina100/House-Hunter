import { Navigate, Outlet } from "react-router-dom"
import { useAuthStatus } from "../MyHooks/useAuthStatus"

function PrivateRouter() {

  const {loggedIn, loading} = useAuthStatus()

  if(loading){
    return <h1>loading...</h1>
  }

  return  loggedIn ? <Outlet/> : <Navigate to='/signin'/>

}
export default PrivateRouter