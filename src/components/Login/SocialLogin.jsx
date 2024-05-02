import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../provider/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate()
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log('socialLogin', result.user)
                const userInfo = {
                    name: result.user?.displayName,
                    email: result.user?.email
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                        navigate('/');
                    })
            })
            .catch(err => console.error(err))

    }
    return (
        <div>

            <div className="form-control mt-6">
                <button onClick={handleGoogleSignIn} className="btn shadow-md border-green-300 hover:text-black    shadow-slate-400"><p className='text-xl'><FcGoogle /></p>Sign In With Google </button>
            </div>
        </div>
    );
};

export default SocialLogin;