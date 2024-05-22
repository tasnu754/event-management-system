import { useContext, useEffect, useState } from 'react';
import { AuthProvider } from './FirebaseAuth';
import axios from 'axios';
import { IoMdMenu } from 'react-icons/io';
import MenuItem from './MenuItem';
import { FaEdit } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { IoMdContacts } from "react-icons/io";
import { MdFavorite } from "react-icons/md";
import { MdFileDownloadDone } from "react-icons/md";
import { IoPersonCircle } from "react-icons/io5";
import { IoBarChartSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';


const Sidebar = () => {

    const [isActive, setActive] = useState(false);
    const { user, logout } = useContext(AuthProvider);
    const [role, setRole] = useState("");
    const navigate = useNavigate();

    const handleToggle = () => {
        setActive(!isActive);
      };

  
      const handleSignout = () => {
        logout()
          .then(() => {
            navigate("/");
          })
          .catch((error) => console.log(error));
      };
      const handleHome = () => {
        navigate("/");

      };


      useEffect(() => {

        axios
          .get(`https://event-management-server-nu.vercel.app/user/${user.email}`)
          .then((res) => {
            setRole(res.data.role);
            console.log(res.data.role);
          });


        
       
        }, [user.email]);

    return (
        <div>
      {/* Small device  */}
      <div className=" bg-gray-100 text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold text-xl text-yellow-800">
            Evento
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="p-4 focus:outline-none focus:bg-gray-200"
        >
          <IoMdMenu className="h-5 w-5"></IoMdMenu>
        </button>
      </div>

      {/* Big Device  */}
      <div
        className={`z-10 md:fixed h-full flex flex-col justify-between overflow-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 ${
          isActive && " -translate-x-full absolute "
        }  md:translate-x-0 transition duration-200 ease-in-out `}
      >
        <div>
          {(role == "user" || role == "Premium" || role == "requested") && (
            <>
              <MenuItem
                label="Profile"
                address="makePrem"
                icon={IoPersonCircle}
              ></MenuItem>

              <MenuItem
                label="Booked Events"
                address="bookedEvents"
                icon={FaEye}
              ></MenuItem>
              <MenuItem
                label="Manage Events"
                address="manageUserEvents"
                icon={FaEdit}
              ></MenuItem>
              <MenuItem
                label="Favourites"
                address="favourites"
                icon={MdFavorite}
              ></MenuItem>
            </>
          )}
          {role === "Admin" && (
            <>
              {/* <MenuItem
                label="Admin Dashboard"
                address="adminDashboard"
                icon={MdDashboard}
              ></MenuItem> */}
              <MenuItem
                label="Manage Users"
                address="manageUsers"
                icon={IoMdContacts}
              ></MenuItem>

              <MenuItem
                label="Add Events"
                address="addEvents"
                icon={FaEdit}
              ></MenuItem>
              <MenuItem
                label="Manage Events"
                address="manageEvents"
                icon={IoBarChartSharp}
              ></MenuItem>

               <MenuItem
                label="Approve Premium"
                address="approvePremium"
                icon={MdFileDownloadDone}
              ></MenuItem>
              {/* <MenuItem
                label="Statistics"
                address="statistic"
                icon={FaChartPie}
              ></MenuItem> */}


            </>
          )}
        </div>
        <hr />

    
        <div className="flex flex-col items-center  transition-colors duration-300   text-gray-700 pb-16">
        <button
            onClick={handleHome}
            className="flex justify-center items-center p-4 transform hover:bg-gray-300 "
          >
            <IoIosLogOut className="w-7 h-7 "></IoIosLogOut>
            <span className="mx-4 font-medium text-xl">Home</span>
          </button>
          <button
            onClick={handleSignout}
            className="flex justify-center items-center p-4 transform hover:bg-gray-300"
          >
            <IoIosLogOut className="w-7 h-7 "></IoIosLogOut>
            <span className="mx-4 font-medium text-xl">Logout</span>
          </button>
        </div>
      </div>

        </div>
    );
};

export default Sidebar;