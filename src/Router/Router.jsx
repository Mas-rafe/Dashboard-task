import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";

import DashboardOverview from "../pages/D-Overview/DashboardOverview ";
import CallLogs from "../pages/Call-Logs/CallLogs";
import Appointments from "../pages/Appointments/Appointments";
import Settings from "../pages/Settings/Settings";

const router = createBrowserRouter([
  {
    path: "/",
    Component:Home,
    children:[
        {
            index:true,
            path:"dashboard",
            Component: DashboardOverview

        },
        { 
            path:"calllogs",
            Component:CallLogs
        },
        {
            path:"appointments",
            Component: Appointments
        },
        {
            path:"settings",
            Component: Settings
        }

    ]
   
  },
]);

export default router;