import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main';
import Home from './layout/Home';
import AOS from "aos";
import "aos/dist/aos.css";
import Contact from './layout/Contact';
import ShopUs from './layout/ShopUs';
import Register from './layout/Register';
import Signin from './layout/Signin';
import FirebaseAuth from './layout/FirebaseAuth';
import EventPage from './layout/EventPage';
import PrivateRoute from './layout/PrivateRoute';
import Dashboard from './layout/Dashboard';
import ManageUsers from './layout/ManageUsers';
import ApprovedPrem from './layout/ApprovedPrem';
import AddEvents from './layout/AddEvents';
import ManageEvents from './layout/ManageEvents';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PremuimReq from './layout/PremuimReq';
import BookedEvents from './layout/BookedEvents';
import ManageUserEvents from './layout/ManageUserEvents';
import Favourites from './layout/Favourites';
import UpdateEvent from './layout/UpdateEvent';
AOS.init();

const queryClient = new QueryClient();


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/home",
        element: <Home></Home>
      },
      {
        path: "/shop",
        element: <ShopUs></ShopUs>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/signin",
        element: <Signin></Signin>
      },
      {
        path: "/eventpage/:id",
        element: <PrivateRoute>
          <EventPage></EventPage>
        </PrivateRoute>,
        loader: ({ params }) =>
          fetch(
            `https://event-management-server-nu.vercel.app/event/${params.id}`
          ),
      }

    ]
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "manageUsers",
        element: <ManageUsers></ManageUsers>
      },
      {
        path: "approvePremium",
        element: <ApprovedPrem></ApprovedPrem>
      },
      {
        path: "addEvents",
        element: <AddEvents></AddEvents>
      },
      {
        path: "manageEvents",
        element: <ManageEvents></ManageEvents>
      },
      {
        path: "makePrem",
        element: <PremuimReq></PremuimReq>
      },
      {
        path: "bookedEvents",
        element: <BookedEvents></BookedEvents>
      },
      {
        path: "manageUserEvents",
        element: <ManageUserEvents></ManageUserEvents>
      },
      {
        path: "favourites",
        element: <Favourites></Favourites>
      },
      {
        path: "updateEvent/:id",
        element: <UpdateEvent></UpdateEvent>,
        loader: ({ params }) =>
          fetch(
            `https://event-management-server-nu.vercel.app/event/${params.id}`
          ),
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <FirebaseAuth>
    <div className='max-w-screen-2xl mx-auto'>
    <RouterProvider router={router} />
    </div>
    </FirebaseAuth>
    </QueryClientProvider>
  </React.StrictMode>,
)
