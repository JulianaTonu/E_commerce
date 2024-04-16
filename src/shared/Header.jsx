import { NavLink } from "react-router-dom"
import { IoIosCart } from "react-icons/io";
import logo from '../assets/logo.png'
const Header = () => {
   
    const links = <>
    <li><NavLink to="/" >Home</NavLink></li>
    <li><NavLink to="/category">Category</NavLink></li>
    <li><NavLink to="/men">Mens</NavLink></li>
    <li><NavLink to="/womwn">Womens</NavLink></li>
    <li><NavLink to="/kids">Kids</NavLink></li>
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
  <span className="indicator-item badge badge-info ">9+</span> 
  <p className="mt-4 text-2xl"><IoIosCart /></p>
</div>
  <a className="btn bg-orange-400 ms-4">Sign In</a>
  </div>
</div>
    </div>
  )
}

export default Header