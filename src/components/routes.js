import Icon from "@mui/material/Icon";
import Categories from "../views/Categories";
import Home from "../views/Home";
import Products from "../views/Products";
import UserDetail from "../views/UserDetail";
import Users from "../views/Users";
import Register from "../views/Register";
// import { isLoggedIn } from "../utils/auth";
import Login from "../views/Login";

const privateRoutes = [
    {
        type: "default",
        name: "Home",
        key: "home",
        icon: <Icon fontSize="small">home</Icon>,
        route: "/home",
        component: <Home />,
        private: true
    },
    {
        type: "collapse",
        name: "Products",
        key: "products",
        icon: <Icon fontSize="small">table_view</Icon>,
        route: "/products",
        component: <Products />,
        private: true
    },
    {
        type: "collapse",
        name: "Categories",
        key: "categories",
        icon: <Icon fontSize="small">table_view</Icon>,
        route: "/categories",
        component: <Categories />,
        private: true
    },
    {
        type: "collapse",
        name: "Users",
        key: "users",
        icon: <Icon fontSize="small">users</Icon>,
        route: "/users",
        component: <Users />,
        private: true
    },
    // {
    //     type: "collapse",
    //     name: "Addresses",
    //     key: "addressses",
    //     icon: <Icon fontSize="small">users</Icon>,
    //     route: "/addresses",
    //     component: <Users />,
    // },
    {
        type: "hidden",
        name: "UserDetail",
        key: "userDetail",
        icon: <Icon fontSize="small">users</Icon>,
        route: "/users/:id",
        component: <UserDetail />,
        private: true
    },
];

const publicRoutes = [
    {
        type: "regular",
        name: "Register",
        key: "register",
        icon: <Icon fontSize="small">register</Icon>,
        route: "/register",
        component: <Register />,
        private: false
    },
    {
        type: "default",
        name: "Login",
        key: "login",
        icon: <Icon fontSize="small">register</Icon>,
        route: "/login",
        component: <Login />,
        private: false
    },
];


const routes = { privateRoutes, publicRoutes };

export default routes;
