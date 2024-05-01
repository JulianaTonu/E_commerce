import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import  { AuthContext } from "../../provider/AuthProvider";


const SocialLogin = () => {
    const {googleSignIn}=useContext(AuthContext);

    const handleGoogleSignIn =()=>{
        googleSignIn()
        .then(result=>{
            console.log('socialLogin',result.user)
        })
        .catch(err=>console.error(err))
        
    }
    return (
        <div>
            
            <div className="form-control mt-6">
              <button onClick={handleGoogleSignIn}  className="btn shadow-md border-green-300 hover:text-black    shadow-slate-400"><p className='text-xl'><FcGoogle/></p>Sign In With Google </button>
            </div>
        </div>
    );
};

export default SocialLogin;