import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import ContactUs from "../../Pages/ContactUs/ContactUs";
import FAQ from "../../Pages/FAQ/FAQ";
import About from "../../Pages/Home/About/About";
import Home from "../../Pages/Home/Home/Home";
import PrivacyPolicy from "../../Pages/PrivacyPolicy/PrivacyPolicy";
import RefundPolicy from "../../Pages/RefundPolicy/RefundPolicy";
import TermsAndConditions from "../../Pages/TermsAndConditions/TermsAndConditions";

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
            {
                path: '/privacy-policy',
                element: <PrivacyPolicy></PrivacyPolicy>
            },
            {
                path: '/terms-and-conditions',
                element: <TermsAndConditions></TermsAndConditions>
            },
            {
                path: '/refund-policy',
                element: <RefundPolicy></RefundPolicy>
            },
        ]
    }
])