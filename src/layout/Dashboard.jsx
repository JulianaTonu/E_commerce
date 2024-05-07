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