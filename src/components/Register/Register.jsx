import { Link, useNavigate } from 'react-router-dom';
import pic from '../../assets/pproducts/log.png'
import { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { FaEye, FaRegEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../../provider/AuthProvider';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import SocialLogin from '../Login/SocialLogin';


const Register = () => {
    const axiosPublic = useAxiosPublic()
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const [registerError, setRegisterError] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log("hello", name, email, password)
        setRegisterError('');
        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters or longer')
            return;
        }

        //createUser
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user
                console.log('loggedUser', loggedUser);

                updateUserProfile(name, email)
                    .then(() => {
                        const userInfo = {
                            name: name,
                            email: email
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('user added to the database')
                                    Swal.fire({
                                        position: "top-middle",
                                        icon: "success",
                                        title: 'User Created Successfully',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/')
                                }
                            })
                    })
                    .catch(e => console.error(e))

            })
            .catch(error => {
                console.error(error)
                setRegisterError(error.message)
            })
    }




    return (
        <div className="hero min-h-screen bg-base-200 shadow-md my-10 shadow-slate-500">
            <div className="hero-content  flex-col lg:flex-row-reverse">
                <div className="text-center  lg:text-Center bg-orange-400 shadow-md shadow-slate-400 lg:ms-10 h-[700px] lg:w-[600px] p-4">
                    <h1 className="md:text-5xl text-3xl font-bold  text-white mt-8">Welcome </h1>
                    <p className="py-6 text-slate-100 lg:px-3">Provident cupiditate voluptatem etin.Quaerat fugiat ut  assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <img src={pic} alt="" className='lg:h-80 h-72  mx-auto mt-16' />
                </div>
                <div className="card shrink-0 w-full   px-1 max-w-sm   ">
                    <form onSubmit={handleRegister} className="">
                        <div className="form-control">
                            <h1 className="md:text-5xl text-3xl text-orange-500 text-center mb-10 font-bold "> Register</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="your name" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered " />
                            </div>
                        </div>
                        <div className="form-control flex">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className='flex'>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="password"
                                    name='password'
                                    className="input input-bordered w-96 flex"
                                    required />
                                <span onClick={() => setShowPassword(!showPassword)}
                                    className='mt-4 ms-2 cursor-pointer font-medium hover:font-bold '>
                                    {showPassword ? <FaEye /> : <FaRegEyeSlash />}</span>
                            </div>
                            <label className="label">
                                <p className=' text-center font-semibold  '>Already Have an Account? Please <Link className='text-orange-500 font-bold' to='/login'>Login</Link></p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-orange-400 text-white shadow-md border hover:text-black  border-orange-500 shadow-slate-400">Register</button>
                        </div>
                    </form>
                    {
                        registerError && <p className='text-red-500'>{registerError}</p>
                    }

                <SocialLogin/>
                </div>
            </div>
        </div>
    );
};

export default Register;