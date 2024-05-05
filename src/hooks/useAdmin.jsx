import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../provider/AuthProvider";


const useAdmin = () => {
    const {user}=useContext(AuthContext)
    const axiosSecure =useAxiosSecure();
    const {data:isAdmin} =useQuery({
        queryKey:[user?.email, 'isAdmin'],
        queryFn:async()=>{
            const res =await axiosSecure.get(`/users/admin/${user.email}`)
            console.log('useAdmin',res.data.admin)
            return res.data?.admin
        }
    })
    return [isAdmin]
};

export default useAdmin;