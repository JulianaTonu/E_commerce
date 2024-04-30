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

export const router =createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/men",
                element:<Mens></Mens>
            },
            {
                path:"/women",
                element:<Womens></Womens>
            },
            {
                path:"/kid",
                element:<Kids></Kids>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            },
            {
                path:"/MenItemsDetails/:id",
                element:<MenDetails></MenDetails>,
                loader:({params})=>fetch(`http://localhost:5000/product/${params.id}`)

                
            },
            {
                path:"/WomenDetails/:id",
                element:<WomenDetails></WomenDetails>,
                loader:({params})=>fetch(`http://localhost:5000/product/${params.id}`)
            },
        ]
    },

    {
        path:'dashboard',
        element:<Dashboard></Dashboard>,
        children:[
            {
                path:'cart',
                element:<Cart></Cart>
            }
        ]
    }
])