import { FaDeleteLeft } from "react-icons/fa6";
import useCart from "../../../hooks/useCart";

const Cart = () => {
    const [cart] =useCart()
    const totalPrice =cart.reduce((total, item)=>total+item.price, 0)
    
    return (
        <div className="">
            <h1 className="text-center font-semibold text-xl">Total Items : {cart.length}</h1>
            <div className="overflow-x-auto">
  <table className="table ">
  
    <tbody>
      {/* row  */}
     
    {
        cart.map(item=> <tr key={item._id} className="border-b-2 border-orange-500">   
            <td>
              <div className="flex  gap-3">
                <div className="avatar">
                  <div className="mask mask-square  w-28 h-28 ">
                    <img src={item.img} alt="Avatar Tailwind CSS Component" className=" rounded-md border-2 border-gray-500" />
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-lg">{item.productName}</div>
                  <div className="text-sm opacity-50">Lorem ipsum dolor sit amet, conse</div>
                  <div className="text-sm opacity-50">Quantity </div>
                  <button className="text-sm py-2 mt-4 hover:bg-orange-800 rounded-md px-4 bg-black  text-white flex gap-2 items-center">delete<FaDeleteLeft></FaDeleteLeft></button>

                </div>
              </div>
            </td>
            
            <td className="font-semibold text-3xl text-end">${item.price}</td>
            {/* <th>
              <button className="btn btn-ghost btn-xs">delete</button>
            </th> */}
          </tr>)
    }
    </tbody>
    {/* foot */}
    <tfoot>
      <tr>
      <th></th>

        <th className="text-lg text-end">Total: ${totalPrice}</th>
        <th></th>
      </tr>
    </tfoot>
    
  </table>
  <div className=" text-center">
  <button className="text-lg py-2  mt-4 hover:bg-black rounded-md px-8 bg-orange-500 text-white">Pay</button>

  </div>

</div>
        </div>
    );
};

export default Cart;