import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import ContactUs from "../../Pages/ContactUs/ContactUs";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import EditBioDataInfo from "../../Pages/Dashboard/EditBioData/EditBioSection/EditBioDataInfo";
import IgnoreList from "../../Pages/Dashboard/IgnoreList";
import LogOut from "../../Pages/Dashboard/LogOut";
import MyPurchased from "../../Pages/Dashboard/MyPurchased";
import Settings from "../../Pages/Dashboard/Settings";
import ShortList from "../../Pages/Dashboard/ShortList";
import SupportReport from "../../Pages/Dashboard/SupportReport";
import FAQ from "../../Pages/FAQ/FAQ";
import About from "../../Pages/Home/About/About";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import PrivacyPolicy from "../../Pages/PrivacyPolicy/PrivacyPolicy";
import RefundPolicy from "../../Pages/RefundPolicy/RefundPolicy";
import SignUp from "../../Pages/SignUp/SignUp";
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
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
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
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/editbiodata',
                element: <EditBioDataInfo></EditBioDataInfo>
            },
            {
                path: '/dashboard/shortlist',
                element: <ShortList></ShortList>
            },
            {
                path: '/dashboard/ignorelist',
                element: <IgnoreList></IgnoreList>
            },
            {
                path: '/dashboard/mypurchased',
                element: <MyPurchased></MyPurchased>
            },
            {
                path: '/dashboard/supportreport',
                element: <SupportReport></SupportReport>
            },
            {
                path: '/dashboard/settings',
                element: <Settings></Settings>
            },
            {
                path: '/dashboard/logout',
                element: <LogOut></LogOut>
            },

        ]
    }
])