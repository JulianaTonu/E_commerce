import { BsCardText, BsFillGridFill } from "react-icons/bs";
import { FaArrowUp, FaDollarSign } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";


const AdminDashboard = () => {
    return (
        <div className="md:flex gap-2">

            <div className="shadow-lg w-64 p-2 mb-3 bg-emerald-100">
                <div className="flex justify-between  ">
                    <div className=""><h1 className="text-xl">Total Sales</h1>
                        <p className="text-sm text-slate-400">last 30 days</p></div>
                    <div className="text-red-400 text-4xl mt-2"><FaDollarSign /></div>
                </div>
                <h1 className="flex items-center text-3xl gap-2 mt-3"><span><FaArrowUp /></span>$343</h1>
            </div>
            {/* //Total Order */}
            <div className="shadow-lg w-64 p-2 mb-3 bg-yellow-200">
                <div className="flex justify-between  ">
                    <div className=""><h1 className="text-xl">Total Order</h1>
                        <p className="text-sm text-slate-400">last 30 days</p></div>
                    <div className="text-cyan-400 text-4xl mt-2"><BsCardText/></div>
                </div>
                <h1 className="flex items-center text-3xl gap-2 mt-3"><span><FaArrowUp /></span>98</h1>
            </div>
            {/* // Total Customer */}
            <div className="shadow-lg w-64 p-2 mb-3 bg-violet-200">
                <div className="flex justify-between  ">
                    <div className=""><h1 className="text-xl">Total Customer</h1>
                        <p className="text-sm text-slate-400">last 30 days</p></div>
                    <div className="text-red-400 text-4xl mt-2"><FiUsers /></div>
                </div>
                <h1 className="flex items-center text-3xl gap-2 mt-3"><span><FaArrowUp/></span>12</h1>
            </div>
            {/* //Total products */}
            <div className="shadow-lg w-64 p-2 mb-3 bg-rose-200">
                <div className="flex justify-between  ">
                    <div className=""><h1 className="text-xl">Total Products</h1>
                        <p className="text-sm text-slate-400">last 30 days</p></div>
                    <div className="text-red-800 text-4xl mt-2"><BsFillGridFill />
</div>
                </div>
                <h1 className="flex items-center text-3xl gap-2 mt-3"><span><FaArrowUp /></span>76</h1>
            </div>
        </div>
    );
};

export default AdminDashboard;