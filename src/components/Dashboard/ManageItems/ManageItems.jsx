import { FaEdit, FaTrashAlt } from "react-icons/fa";
import useProduct from "../../../hooks/useProduct";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const ManageItems = () => {
    const [products, refetch] = useProduct();
    const axiosSecure =useAxiosSecure()
    // const handleEditProduct = () => {

    // }
  

    const handleDeleteProduct= products =>{
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
            axiosSecure.delete(`/product/${products._id}`)
            .then(res=>{
                if(res.data.deletedCount > 0){                  
                    refetch()
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your Product has been deleted.",
                        icon: "success"
                      });
        
                }
            })
            }
          });
    }
    return (
        <div>
            <h1> Manage Products {products.length}</h1>


            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row  */}
                        {
                            products.map((product, index) => <tr key={product._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={product.img} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="font-semibold">
                                    {product.productName}

                                </td>
                                <td>$ {product.newPrice}</td>
                                <td className="text-blue-500">
                                    <Link to={`/dashboard/updateItems/${product._id}`}><button  className="ms-3"><FaEdit /></button></Link>
                                </td>
                                <td className="text-red-500">
                                    <button onClick={() => handleDeleteProduct(product)} className="ms-3"><FaTrashAlt /></button>
                                </td>
                            </tr>)
                        }


                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default ManageItems;