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
                path:"/MenItemsdetails/:id",
                element:<MenDetails></MenDetails>
            },
            {
                path:"/Womendetails/:id",
                element:<WomenDetails></WomenDetails>
            },
        ]
    }
])