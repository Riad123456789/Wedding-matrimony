import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../HomePage/HomePage";
// import About from "../Pages/About";
// import ContactPage from "../Pages/Contact/ContactPage";
// import GalleryPage from "../Pages/Gallery/GalleryPage";
// import AllProducts from "../Pages/AllProducts/AllProducts";
// import ErrorPage from "../Pages/ErrorPage/ErrorPage";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        // errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <HomePage></HomePage>
            },
            // {
            //     path: '/about',
            //     element: <About></About>
            // },
            // {
            //     path: '/contact',
            //     element: <ContactPage></ContactPage>,
            // },
            // {
            //     path: '/gallery',
            //     element: <GalleryPage></GalleryPage>,
            // },
            // {
            //     path: '/allProducts',
            //     element: <AllProducts></AllProducts>,
            // },
                      
        ]
    },
]);

export default Router;
