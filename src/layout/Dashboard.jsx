import { FaAddressBook, FaList, FaShoppingCart, FaUser, FaUsers } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
// import useAdmin from "../hooks/useAdmin";
import useAdmin from "../hooks/useAdmin"


const Dashboard = () => {
 

    const [ isAdmin, isAdminLoading ] = useAdmin();
    console.log('dashboard', isAdmin, isAdminLoading);

    // Display loading indicator if isAdminLoading is true
    if (isAdminLoading) {
        return <div>Loading...</div>;
    }
    return (
        <div>
<div className="navbar bg-slate-100">
  <div className="flex-1">
    <a className="font-bold text-4xl text-start ">Dashboard</a>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
            <div className="flex">
                <div className="w-64 min-h-screen bg-slate-200">
                    <ul className="menu p-4">


                        {
                            isAdmin ? (
                                <>
                                    <li className="hover:text-orange-500">
                                        <NavLink to='adminHome'>
                                            <FaUser /> Admin Home
                                        </NavLink>
                                    </li>
                                    <li className="hover:text-orange-500">
                                        <NavLink to='dashboard/cart'>
                                            <FaShoppingCart /> My Cart
                                        </NavLink>
                                    </li>
                                    <li className="hover:text-orange-500">
                                        <NavLink to='addItems'>
                                            <FaList /> Add Items
                                        </NavLink>
                                    </li>
                                    <li className="hover:text-orange-500">
                                        <NavLink to='manageItems'>
                                            <FaAddressBook /> Manage Items
                                        </NavLink>
                                    </li>
                                    <li className="hover:text-orange-500">
                                        <NavLink to='manageBookings'>
                                            <FaAddressBook /> Manage Bookings
                                        </NavLink>
                                    </li>
                                    <li className="hover:text-orange-500">
                                        <NavLink to='allUsers'>
                                            <FaUsers /> All Users
                                        </NavLink>
                                    </li>
                                </>

                            ) : (
                                <>
                                    <li>
                                        <NavLink to='dashboard/home'>
                                            <FaUser /> User Home
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='dashboard/cart'>
                                            <FaShoppingCart /> My Cart
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='dashboard/review'>
                                            <FaAddressBook /> Add a Review
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='dashboard/booking'>
                                            <FaList /> My Bookings
                                        </NavLink>
                                    </li>
                                </>
                            )
                        }



                        <div className="divider"></div>

                        <li><NavLink to='/'>
                            <FaUser></FaUser>
                            Home</NavLink>
                        </li>
                        <li><NavLink to='/items'>
                            <FaUser></FaUser>
                            Items</NavLink>
                        </li>
                    </ul>
                </div>

                <div className="flex-1 p-6">
                    <Outlet></Outlet>
                </div>

            </div>

        </div>

    );
};

export default Dashboard;