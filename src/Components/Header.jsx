import { useNavigate, useLocation } from "react-router-dom"
import PersonOutline from "../assets/SvgComponents/PersonOutline"
import OfferIcon from "../assets/SvgComponents/OfferIcon"
import ExploreIcon from "../assets/SvgComponents/ExploreIcon"


function Header() {

  const navigate = useNavigate()
  const location = useLocation()
  return (
    <>
    <footer className="fixed left-0 right-0 bottom-0 h-[85px] z-1000 flex justify-center items-center">
      <nav className="w-full mt-1 overflow-y-hidden">
        <ul className="flex justify-evenly items-center">

          <li className="flex-col items-center" onClick={()=>navigate('/')}>
            <ExploreIcon className="w-[36px] h-[36px]" /> <p>Explore</p>
          </li>

          <li className="flex-col items-center"  onClick={()=>navigate('/offers')}>
            <OfferIcon className="w-[36px] h-[36px]"/><p>offers</p>
          </li>

          <li className="flex-col items-center"  onClick={()=>navigate('/profile')}>
            <PersonOutline  widhth='36px' height='36px'/><p>Profile</p>
          </li>


        </ul>

      </nav>
    </footer>
    
    </>
  )
}
export default Header