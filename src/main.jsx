import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Aboutus from './Pages/About.jsx'
import Price from './Pages/Price.jsx'
import Coaches from './Pages/Coaches.jsx'
import Contact from './Pages/Contact.jsx'
import Layout from './Components/Layout.jsx'
import Login from './Pages/Login.jsx'
import AuthLayout from './Components/Authlayout.jsx'
import SignUp from './Pages/Signup.jsx'
import Admin from './Pages/Admin.jsx'
import User from './Pages/User.jsx'
import { Toaster } from 'react-hot-toast'
import Session from './Pages/Session.jsx'
import Chats from './Pages/Chats.jsx'
import Earnings from './Pages/Earnings.jsx'
import Availability from './Pages/Availability.jsx'
import Profile from './Pages/Profile.jsx'
import Call from './Pages/Call.jsx'
import Appointments from './Pages/Appointments.jsx'
import Chatsuser from './Pages/Chatsuser.jsx'
import Profileuser from './Pages/Profileuser.jsx'
import Expensesuser from './Pages/Expensesuser.jsx'
import Credit from './Pages/Credit.jsx'
import Calluser from './Pages/Calluser.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // :white_check_mark: TopBar + Footer
    children: [
      { index: true, element: <App /> },
      {path:"/", element : <App/>},
      { path: 'About', element: <Aboutus /> },
      { path: 'Price', element: <Price /> },
       { path: 'Coaches', element: <Coaches /> },
      { path: 'Contact', element: <Contact /> },
         
    ],
  },
  {
    path: '/',
    element: <AuthLayout />, // :x: No TopBar/Footer
    children: [
      { path: 'Login', element: <Login /> },
      { path: 'Signup', element: <SignUp /> },
      { path: 'Admin', element: <Admin /> },
      { path: 'User', element: <User /> },
      {path:"Session", element : <Session/>},
      {path:"Chats", element : <Chats/>},
      {path:"Earnings", element : <Earnings/>},
   {path:"Availability", element : <Availability/>},
    {path:"Profile", element : <Profile/>},
     {path:"Call", element : <Call />},
       {path:"Appointments", element : <Appointments />},
          {path:"UserChats", element : <Chatsuser />},
           {path:"Profileuser", element : <Profileuser />},
           {path:"Expenseuser", element : <Expensesuser />},
            {path:"Credit", element : <Credit />},
            {path:"Calluser", element : <Calluser />},
    ],
  },
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router= {router}/>
    <Toaster position='bottom-left' reverseOrder={false} />
  </StrictMode>,
)
