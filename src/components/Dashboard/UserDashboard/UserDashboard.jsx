
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { FaAddressBook } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";



const UserDashboard = () => {
  const { user } = useContext(AuthContext);
  
  return (
    <div>
      <div className="flex items-center ">
        <h2 className="me-3 text-2xl mb-2">Hi, Welcome Back</h2>
        {/* <p className="text-4xl capitalize text-orange-600">{user?.displayName ? user.displayName : ""}</p> */}
      </div>

      <div className="flex gap-3 my-5">
        <div className="shadow-lg w-72 h-32 p-2 mb-3  bg-purple-200 flex text-center items-center ">
          <div className="w-1/2 ps-14">
            <p className="text-5xl mt-3">
              <FaAddressBook />
            </p>
          </div>
          <div className=" w-1/2 text-start">
            <h1 className="text-4xl gap-2 my-1">24</h1>
            <h1 className="text-lg"> Products</h1>
          </div>
        </div>

        <div className="shadow-lg w-72 h-32 p-2 mb-3  bg-yellow-200 flex text-center items-center ">
          <div className="w-1/2 ps-14">
            <p className="text-6xl mt-3">
              <MdHome></MdHome>
            </p>
          </div>
          <div className=" w-1/2 text-start">
            <h1 className="text-4xl gap-2 my-1">12</h1>
            <h1 className="text-lg"> Shop</h1>
          </div>
        </div>

        <div className="shadow-lg w-72 h-32 p-2 mb-3  bg-blue-200 flex text-center items-center ">
          <div className="w-1/2 ps-14">
            <p className="text-5xl mt-3">
              <FaPhone></FaPhone>
            </p>
          </div>
          <div className=" w-1/2 text-start">
            <h1 className="text-4xl gap-2 my-1">03</h1>
            <h1 className="text-lg"> Contact</h1>
          </div>
        </div>
      </div>
<div className="w-1/2 bg-slate-100 pt-16 pb-12 text-center p-4">
<div className="avatar online ">
  <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={user.photoURL? user?.photoURL : "https://i.ibb.co/JsfTHfK/06e6ddb0-1e45-44b8-8143-36f3f6e68550.png"} />
  </div>
</div>
<h1 className="text-2xl mt-3 ms-3 capitalize font-semibold"> {user?.displayName}</h1>
<p className="text-lg mt-3 ms-3  font-semibold"> {user?.email}</p>
</div>

<div className="w-1/2"></div>
    </div>
  );
};

export default UserDashboard;
