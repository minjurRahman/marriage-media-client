import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import ContactUs from "../../Pages/ContactUs/ContactUs";
import FAQ from "../../Pages/FAQ/FAQ";
import About from "../../Pages/Home/About/About";
import Home from "../../Pages/Home/Home/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about-us',
                element: <About></About>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/contact-us',
                element: <ContactUs></ContactUs>
            },
        ]
    }
])