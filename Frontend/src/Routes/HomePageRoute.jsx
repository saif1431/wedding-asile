// src/routes/HomePageRoute.jsx
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeLayout from '../Pages/HomePages/HomeLayout'
import HomePage from '../Pages/HomePages/HomePage'
import Login from '../Pages/HomePages/Login'
import AuthLayout from '../Pages/HomePages/AuthLayout'
import SignUp from '../Pages/HomePages/SignUp'
import ServicePackageView from '../Components/HomeComponents/ServicesViewComponent/ServicePackageView'
import VendorProfileView from '../Components/HomeComponents/VendorProfileView/VendorProfileView'
import ServicesPage from '../Pages/HomePages/ServicesPage'
import AboutUs from '../Pages/HomePages/AboutUs'
import CancellationPolicy from '../Pages/HomePages/CancellationPolicy'
import TermsOfUse from '../Pages/HomePages/TermsOfUse'
import ContactUs from '../Pages/HomePages/ContactUs'
import ForgetPassword from '../Pages/HomePages/ForgetPassword'
import NewPassword from '../Pages/HomePages/NewPassword'
import BookingDetail from '../Pages/HomePages/BookingDetail'
import CheckoutPage from '../Pages/HomePages/CheckoutPage'
import BookingCallPage from '../Pages/HomePages/BookingCallPage'
import PrivacyNotes from '../Pages/HomePages/PrivacyNotes'
import FAQS from '../Pages/HomePages/FAQS'
import VendorMap from '../Pages/HomePages/VendorMap'

function HomePageRoute() {
  return (
    <Routes>
      {/* Regular routes with header/footer */}
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<HomePage />} />
        <Route path='PackageView' element={<ServicePackageView />} />
        <Route path='VendorProfile' element={<VendorProfileView />} />
        <Route path='Services' element={<ServicesPage />} />
        <Route path='about' element={<AboutUs />} />
        <Route path='cancellation-policy' element={<CancellationPolicy />} />
        <Route path='terms-of-use' element={<TermsOfUse />} />
        <Route path='booking' element={<BookingDetail />} />
        <Route path='contact-us' element={<ContactUs />} />
        <Route path='Checkout' element={<CheckoutPage />} />
        <Route path='call-booking' element={<BookingCallPage />} />
        <Route path='PrivacyNotes' element={<PrivacyNotes />} />
        <Route path='FAQS' element={<FAQS />} />
      </Route>
      
      {/* Auth routes without header/footer */}
      <Route path="/" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="forget-password" element={<ForgetPassword />} />
        <Route path="change-password" element={<NewPassword />} />
        <Route path="SignUp" element={<SignUp />} />
        <Route path="VendorMap" element={<VendorMap />} />
      </Route>
    </Routes>
  )
}

export default HomePageRoute