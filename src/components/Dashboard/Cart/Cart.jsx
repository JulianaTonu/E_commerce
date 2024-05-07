// import { FaDeleteLeft } from "react-icons/fa6";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

const Cart = () => {
    const [cart,refetch] =useCart()
    const totalPrice =cart.reduce((total, item)=>total+item.price, 0)
    const axiosSecure =useAxiosSecure()
    
    const handleDelete=id=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            
            axiosSecure.delete(`/carts/${id}`)
            .then(res=>{
                if(res.data.deletedCount > 0){
                    refetch()
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
        
                }
            })
            }
          });
    }
    return (
      <div className="">
      {cart.length ? (
        <div>
          <h1 className="text-center font-semibold text-xl">Total Items: {cart.length}</h1>
          <div className="overflow-x-auto">
            <table className="table">
              <tbody>
                {cart.map(item => (
                  <tr key={item._id} className="border-b-2 border-orange-500">
                    <td>
                      <div className="flex gap-3">
                        <div className="avatar">
                          <div className="mask mask-square w-28 h-28">
                            <img src={item.img} alt="Product" className="w-24 h-24 rounded-md border-2 border-gray-500" />
                          </div>
                        </div>
                        <div>
                          <div className="font-semibold text-lg">{item.productName}</div>
                          <div className="text-sm opacity-50">Lorem ipsum dolor sit amet, conse</div>
                          <h1 className="text-sm opacity-50">Id: {item._id}</h1>
                          <button onClick={() => handleDelete(item._id)} className="text-sm py-2 mt-4 hover:bg-orange-800 rounded-md px-4 bg-black text-white flex gap-2 items-center">
                            Delete <FaTrash />
                          </button>
                        </div>
                      </div>
                    </td>
                    <td className="font-semibold text-3xl text-end">${item.price}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <th></th>
                  <th className="text-lg text-end">Total: ${totalPrice}</th>
                  <th></th>
                </tr>
              </tfoot>
            </table>
            <div className="text-center">
              <Link to='/dashboard/payment'>
                <button className="text-lg py-2 mt-4 hover:bg-black rounded-md px-8 bg-orange-500 text-white">Pay</button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <h1>Please add items to your cart</h1>
      )}
    </div>
  );
};

export default Cart;