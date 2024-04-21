import { Link } from 'react-router-dom';
import pic from '../../assets/pproducts/log.png'
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
const Login = () => {
  const { signIn } = useContext(AuthContext)

  
  const handleLogin =e=>{
    e.preventDefault();
    const email =e.target.email.value
    const password =e.target.password.value
    console.log("login",email,password)

    signIn(email,password)
    .then(result=>{
      console.log(result)
      Swal.fire({
        position: "top-middle",
        icon: "success",
        title: "Successfully Login ",
        showConfirmButton: false,
        timer: 1500
    });
    })
    .catch(e=>{
      console.log(e)
    })
  }

    return (
        <div className="hero min-h-screen bg-base-200 shadow-md my-10 shadow-slate-500">
        <div className="hero-content  flex-col lg:flex-row-reverse">
          <div className="text-center  lg:text-Center bg-orange-400 shadow-md shadow-slate-400 lg:ms-10 h-[700px] lg:w-[700px] p-4">
            <h1 className="md:text-5xl text-3xl font-bold  text-white mt-8">Welcome Back</h1>
            <p className="py-6 text-slate-100 lg:px-3">Provident cupiditate voluptatem etin.Quaerat fugiat ut  assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <img src={pic} alt="" className='lg:h-80 h-72  mx-auto mt-16' />
          </div>
          <div className="card shrink-0 w-full max-w-sm   ">
            <form onSubmit={handleLogin} className="">
              <div className="form-control">
              <h1 className="md:text-5xl text-3xl text-orange-500 text-center mb-10 font-bold "> Login</h1>

                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                <label className="label">
                <p className=' text-center font-semibold  '>New to this website? Please <Link className='text-orange-500 font-bold' to='/register'>Register</Link></p>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-orange-400 text-white shadow-md border hover:text-black  border-orange-500 shadow-slate-400">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;