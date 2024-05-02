import { FaAddressBook, FaList, FaShoppingCart, FaUser, FaUsers } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    const isAdmin =true;
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-100">
                <ul className="menu p-4">
                    
                    
                {
    isAdmin ? <>
    <li className="hover:text-orange-500"><NavLink to='dashboard/adminHome'>
                        <FaUser></FaUser>
                        Admin Home</NavLink>
                    </li>
                    <li className="hover:text-orange-500">
                        <NavLink to='dashboard/cart'>
                        <FaShoppingCart></FaShoppingCart>
                        My Cart</NavLink>
                    </li>
                    <li className="hover:text-orange-500"
                    ><NavLink to='dashboard/manageBooking'>
                        <FaList></FaList>
                       Manage Items</NavLink>
                    </li>   
                    <li className="hover:text-orange-500 "
                    ><NavLink to='dashboard/manageItem'>
                        <FaAddressBook></FaAddressBook>
                       Manage Bookings</NavLink>
                    </li>          
                    <li className="hover:text-orange-500 "
                    ><NavLink to='dashboard/allUsers'>
                        <FaUsers></FaUsers>
                       All Users</NavLink>
                    </li>
    </> 
    :
    <>
    <li><NavLink to='dashboard/home'>
                        <FaUser></FaUser>
                        User Home</NavLink>
                    </li>
                    <li><NavLink to='dashboard/cart'>
                        <FaShoppingCart></FaShoppingCart>
                        My Cart</NavLink>
                    </li>
               
                    <li><NavLink to='dashboard/cart'>
                        <FaAddressBook></FaAddressBook>
                       Add a Review</NavLink>
                    </li>
               
                    <li><NavLink to='dashboard/booking'>
                        <FaList></FaList>
                       My Bookings</NavLink>
                    </li>
    </>
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

            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Dashboard;