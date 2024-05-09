import { FaAddressBook, FaList, FaShoppingCart, FaUser, FaUsers } from "react-icons/fa";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
// import useAdmin from "../hooks/useAdmin";
import useAdmin from "../hooks/useAdmin"
import { useContext,  } from "react";
import { AuthContext } from "../provider/AuthProvider";


const Dashboard = () => {

    const { logout, user } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogOut = () => {
        logout()
            .then(() => { })
            .catch(err => console.error(err))
        navigate('/login')

    }

    const [isAdmin, isAdminLoading] = useAdmin();

    // Display loading indicator if isAdminLoading is true
    if (isAdminLoading) {
        return <div>Loading...</div>;
    }

    const formatDate = (date) => new Intl.DateTimeFormat('en-US', {
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric'
    }).format(date);
    
    // Usage of formatDate function
    const dateTime = new Date(); // Example date/time
    const formattedDate = formatDate(dateTime);


    return (
        <div>
            <div className="navbar bg-slate-100">
                <div className="flex-1">
                    <a className="font-bold text-4xl text-start ">Dashboard</a>
                </div>
                <div className="flex-none gap-2">
                <div className="form-control">
                        <input type="text" placeholder="Search" className="input  w-24 md:w-auto" />
                    </div>
                    <div>
                    <p className="font-semibold bg-black text-sm md:me-4 text-white px-2 py-1 rounded-md">{formattedDate}</p>
                    </div>
                   
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn online  ring-2 btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="pic" src={user.photoURL? user?.photoURL : "https://i.ibb.co/JsfTHfK/06e6ddb0-1e45-44b8-8143-36f3f6e68550.png"} />
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                           
                            <li><a className="text-xl font-serif capitalize text-orange-600"> {user.displayName}</a></li>
                            <li>
                                <a className="justify-between font-semibold">
                                   
                                    {user.email}
                                    {/* <span className="badge">New</span> */}
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><button className="text-orange-700 hover:font-semibold" onClick={handleLogOut}>Logout</button></li>
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
                                        <NavLink to='addItems'>
                                            <FaList /> Add Items
                                        </NavLink>
                                    </li>
                                    <li className="hover:text-orange-500">
                                        <NavLink to='manageItems'>
                                            <FaAddressBook /> Manage Items
                                        </NavLink>
                                    </li>
                                    {/* <li className="hover:text-orange-500">
                                        <NavLink to='manageBookings'>
                                            <FaAddressBook /> Manage Bookings
                                        </NavLink>
                                    </li> */}
                                    <li className="hover:text-orange-500">
                                        <NavLink to='allUsers'>
                                            <FaUsers /> All Users
                                        </NavLink>
                                    </li>
                                </>

                            ) : (
                                <>
                                    <li>
                                        <NavLink to='userDashboard'>
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
                                        <NavLink to='paymentHistory'>
                                            <FaList /> Payment History
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
                       
                    </ul>
                </div>

                <div className="flex-1 p-5">
                    <Outlet></Outlet>
                </div>

            </div>

        </div>

    );
};

export default Dashboard;




