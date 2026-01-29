import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import Navbar from "../components/Navbar/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    Component:Home,
    children:[
        {
            index:true,
            

        }

    ]
   
  },
]);

export default router;