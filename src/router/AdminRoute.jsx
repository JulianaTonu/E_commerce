import  { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import { AuthContext } from '../provider/AuthProvider';



const AdminRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const [isAdmin,isAdminLoading]= useAdmin()
    const location =useLocation()
    
if(loading || isAdminLoading){  
    return<progress className='progress w-56'>Loading....</progress>
}
    
    if(!user && isAdmin){
            return <Navigate to='/' state={{from:location}}
            replace></Navigate>
        }
    
    return children;
};

export default AdminRoute;