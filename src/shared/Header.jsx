import { Link, NavLink } from "react-router-dom"
import { IoIosCart } from "react-icons/io";
import logo from '../assets/logo.png'
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
const Header = () => {
   const {user,logout} =useContext(AuthContext)
console.log("user",user)
   const handleLogOut=()=>{
    logout()
    .then(()=>{})
    .catch(err=>console.error(err))
   }
    const links = <>
    <li><NavLink to="/" >Home</NavLink></li>
    <li><NavLink to="/men">Mens</NavLink></li>
    <li><NavLink to="/women">Womens</NavLink></li>
    <li><NavLink to="/kid">Kids</NavLink></li>
    <li><NavLink to="/contact">contact</NavLink></li>
  </>
  
  return (
    <div>
     <div className="navbar bg-base-100 shadow-lg">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-bold text-orange-500">
      {links}
      </ul>
    </div>
<img src={logo} alt="" className="w-28 h-16  md:ml-4" /> 
 </div>
  <div className="navbar-center hidden lg:flex font-bold text-orange-500">
    <ul className="menu menu-horizontal px-1">
    {links}
    </ul>
  </div>
  <div className="navbar-end">
  <div className="indicator">
  <span className="indicator-item badge  bg-orange-500 text-white ">9+</span> 
  <p className="mt-4 text-2xl "><IoIosCart /></p>
</div>
{
          user?.email ?
          <>
         
         <span className='text-orange-500 font-bold text-lg  font-serif pt-2 mx-2'
         >{user?.displayName}</span>
          <span className=''><button className='btn btn-ghost font-bold bg-orange-500 text-white font-serif ms-4' onClick={handleLogOut}>Logout</button></span>
          </>
            :
           <>
<p className='font-bold bg-orange-500 py-2 px-4 rounded-lg ms-10 text-white  font-serif cursor-pointer'><Link to='/login'>Login</Link></p>
                </>
          }

  </div>
</div>
    </div>
  )
}

export default Header



