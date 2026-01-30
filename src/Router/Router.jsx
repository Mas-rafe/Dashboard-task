import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";

import DashboardOverview from "../pages/D-Overview/DashboardOverview ";
import CallLogs from "../pages/Call-Logs/CallLogs";
import Appointments from "../pages/Appointments/Appointments";
import Settings from "../pages/Settings/Settings";
import EditProfile from "../pages/Settings/EditProfile";

const router = createBrowserRouter([
  {
    path: "/",
    Component:Home,
    children:[
        {
            index:true,
            path:"dashboard",
            Component: DashboardOverview,
            handle: { title: "Dashboard Overview" },

        },
        { 
            path:"calllogs",
            Component:CallLogs,
            handle: { title: "Call Logs & History" },
        },
        {
            path:"appointments",
            Component: Appointments,
            handle: { title: "Appointments"}

        },
        {
            path:"settings",
            Component: Settings,
            handle: { title: "Settings" },
        },
        {
            path:"/settings/edit-profile",
            Component:EditProfile
        }

    ]
   
  },
]);

export default router;