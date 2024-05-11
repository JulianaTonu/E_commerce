import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import './Cart.css'
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";


const Cart = () => {
  const {loading} =useContext(AuthContext)
  const [cart, refetch] = useCart();
  const [products, setProducts] = useState(cart);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    setProducts(cart); // Update products whenever cart changes
  }, [cart]);

  // const totalPrice = products.reduce((total, item) => total + item.price, 0);
  const cartTotalQty = products.reduce((acc, data) => acc + data.qty, 0);
  const cartTotalAmount = products.reduce((acc, data) => acc + data.price * data.qty, 0);

  // Increment Event
  const increaseQty = (index) => {
    const updatedProducts = products.map((product, i) => {
      if (index === i) {
        return { ...product, qty: product.qty + 1 };
      }
      return product;
    });
    setProducts(updatedProducts);
  };

  // Decrement Event
  const decreaseQty = (index) => {
    const updatedProducts = products.map((product, i) => {
      if (index === i && product.qty > 1) {
        return { ...product, qty: product.qty - 1 };
      }
      return product;
    });
    setProducts(updatedProducts);
  };

  const handleDelete = (id) => {
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
          .then(res => {
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          });
      }
    });
  };

  return (

    <div className="">
    {loading ? (
      <div>Loading...</div> // Render loading content
    ) : products.length ? (
     <div>
          <h1 className="text-center font-semibold text-xl">Items in Cart<span className="ml-2 mr-2">:</span><span className="text-danger">{cartTotalQty}</span></h1>
          <div className="overflow-x-auto">
            <table className="table">
              <tbody>
                {products.map((item, index) => (
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
                          <div className="flex items-center mt-2">
                            <h1 className="text-sm  font-semibold me-4">Quantity: </h1>
                            <button className="mx-2 bg-slate-300 p-2 rounded-md hover:bg-slate-400" type="button" onClick={() => decreaseQty(index)}>
                              <FaMinus></FaMinus>
                            </button>
                            <input type="text" name="qty" className="qty-input-box" value={item.qty} disabled />
                            <button className="mx-2 bg-slate-300 p-2 hover:bg-slate-400 rounded-md" type="button" onClick={() => increaseQty(index)}>
                              <FaPlus></FaPlus>
                            </button>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="font-semibold text-3xl text-end">${(item.qty * item.price).toFixed(0)}</td>
                    <td>
                      <button onClick={() => handleDelete(item._id)} className="text-2xl  py-2  hover:bg-red-600 rounded-md px-4  text-red-500 flex gap-2 items-center">
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <th></th>
                  <th className="text-lg text-end">Total: ${cartTotalAmount}</th>
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
