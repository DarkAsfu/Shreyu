import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import DashboardHome from "../Components/DashboardHome/DashboardHome";

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
                element: <h1>here</h1>
            },
            {
                path: "/createEmployee",
                element: <h2>Cre</h2>
            }
        ]
    },
]);

export default router;