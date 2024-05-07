import { FaEdit, FaTrashAlt } from "react-icons/fa";
import useProduct from "../../../hooks/useProduct";


const ManageItems = () => {
    const [products] = useProduct();

    const handleEditProduct = () => {

    }
    const handleDeleteProduct = () => {

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
                                    <button onClick={() => handleEditProduct(product)} className="ms-3"><FaEdit /></button>
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