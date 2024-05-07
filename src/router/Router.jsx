import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../components/Home/Home";
import Mens from "../components/Mens/Mens";
import Womens from "../components/Womens/Womens";
import Kids from "../components/Kids/Kids";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import MenDetails from "../components/Mens/MenDetails";
import WomenDetails from "../components/Womens/WomenDetails";
import Dashboard from "../layout/Dashboard";
import Cart from "../components/Dashboard/Cart/Cart";
import AllUsers from "../components/Dashboard/AllUsers/AllUsers";
import AdminDashboard from "../components/Dashboard/AdminDashboard/AdminDashboard";
import AddItems from "../components/Dashboard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../components/Dashboard/ManageItems/ManageItems";
import UpdateItems from "../components/Dashboard/UpdateItems/UpdateItems";
import KidDetails from "../components/Kids/KidDetails";
import ProductDetails from "../components/Home/PopularProduct/ProductDetails";
import Payment from "../components/Dashboard/Payment/Payment";
// import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/men",
                element: <Mens></Mens>
            },
            {
                path: "/women",
                element: <Womens></Womens>
            },
            {
                path: "/kid",
                element: <Kids></Kids>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/productDetails/:id",
                element: <ProductDetails></ProductDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/product/${params.id}`)
            },
            {
                path: "/MenItemsDetails/:id",
                element: <MenDetails></MenDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/product/${params.id}`)
            },
            {
                path: "/WomenDetails/:id",
                element: <WomenDetails></WomenDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/product/${params.id}`)
            },
            {
                path: "/kidDetails/:id",
                element: <KidDetails></KidDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/product/${params.id}`)
            },
        ]
    },

    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            //normal users
            {
                path: 'dashboard/cart',
                element: <Cart></Cart>
            },
            {
                path: 'payment',
                element:<Payment></Payment>
            },


            //admin Only
            
            {
                path: 'adminHome',
                element: <AdminDashboard></AdminDashboard>
            },
            {
                path: 'addItems',
                element: <AdminRoute><AddItems></AddItems></AdminRoute>
            },
            {
                path: 'manageItems',
                element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
            },
            {
                path: 'updateItems/:id',
                element: <UpdateItems></UpdateItems>,
                loader: ({ params }) => fetch(`http://localhost:5000/product/${params.id}`)
            },

            {
                path: 'allUsers',
                element: <AllUsers></AllUsers>
            }
        ]
    }
])