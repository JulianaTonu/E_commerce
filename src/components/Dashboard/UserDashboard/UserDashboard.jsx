import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";


const UserDashboard = () => {
    const {user}=useContext(AuthContext)
    return (
        <div className="flex items-center ">           
            <h2 className="me-3 text-2xl">Hi, Welcome  </h2>
            <p className="text-4xl capitalize text-orange-600">{
                user?.displayName ? user.displayName :''
            }</p>
        </div>
    );
};

export default UserDashboard;