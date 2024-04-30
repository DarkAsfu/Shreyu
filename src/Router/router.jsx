import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import DashboardHome from "../Components/DashboardHome/DashboardHome";
import AllEmployee from "../Pages/AllEmployee";
import CreateEmployee from "../Pages/CreateEmployee";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard/>,
        children: [
            {
                path: "/",
                element: <DashboardHome/>
            },
            {   
                path: "/allemployee",
                element: <AllEmployee/>
            },
            {
                path: "/createEmployee",
                element: <CreateEmployee/>
            }
        ]
    },
]);

export default router;