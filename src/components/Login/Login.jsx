import pic from '../../assets/pproducts/log.png'
const Login = () => {
    return (
        <div className="hero min-h-screen bg-base-200 shadow-md my-10 shadow-slate-500">
        <div className="hero-content  flex-col lg:flex-row-reverse">
          <div className="text-center  lg:text-Center bg-orange-400 shadow-lg shadow-slate-500 lg:ms-10 h-[700px] lg:w-[700px] p-4">
            <h1 className="md:text-5xl text-3xl font-bold  text-white mt-8">Welcome Back</h1>
            <p className="py-6 text-slate-100 lg:px-3">Provident cupiditate voluptatem etin.Quaerat fugiat ut  assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <img src={pic} alt="" className='lg:h-80 h-72  mx-auto mt-16' />
          </div>
          <div className="card shrink-0 w-full max-w-sm   ">
            <form className="">
              <div className="form-control">
              <h1 className="md:text-5xl text-3xl text-orange-500 text-center mb-10 font-bold "> Login</h1>

                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-orange-400 text-white">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;