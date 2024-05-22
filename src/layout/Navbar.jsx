import {
  Button,
  Collapse,
  IconButton,
  Navbar,
  Typography,
} from "@material-tailwind/react";
// import Container from "../Shared/Container/Container";
import { Link, NavLink } from "react-router-dom";
import React, { useContext } from "react";
import { AuthProvider } from "./FirebaseAuth";

const NavbarPage = () => {
  const { user, logout } = useContext(AuthProvider);

  const handleSignout = () => {
    logout()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 font-bold flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography as="li" variant="small" className="p-1 text-2xl">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-amber-600 text-black font-bold text-2xl p-4 rounded-md"
              : ""
          }
        >
          Home
        </NavLink>
      </Typography>
      <Typography as="li" variant="small" className="p-1 text-2xl">
        <NavLink
          to="/shop"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending hover:text-black"
              : isActive
              ? "bg-amber-600 text-black font-bold  text-2xl p-4 rounded-md "
              : ""
          }
        >
          Shop
        </NavLink>
      </Typography>
      <Typography as="li" variant="small" className="p-1 text-2xl">
        <NavLink
          to="/Contact"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-amber-600 text-black font-bold  text-2xl p-4 rounded-md"
              : ""
          }
        >
          Contact
        </NavLink>
      </Typography>

      <Typography as="li" variant="small" className="p-1 text-2xl">
        <NavLink
          to="/register"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-amber-600 text-black font-bold  text-2xl p-4 rounded-md "
              : ""
          }
        >
          Register
        </NavLink>
      </Typography>
      {user && (
        <Typography as="li" variant="small" className="p-1 text-2xl">
          <NavLink
            to="/dashboard"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "bg-amber-600 text-black font-bold  text-2xl p-4 rounded-md"
                : ""
            }
          >
            Dashboard
          </NavLink>
        </Typography>
      )}
    </ul>
  );

  // if (loading) {
  //   return <Spinner></Spinner>
  // }

  return (
    <Navbar className="navber fixed bg-opacity-20 bg-black text-white top-0 z-10 h-max max-w-screen-2xl rounded-none  shadow-md lg:text-xl border-none">
      <div
        data-aos="flip-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        {/* <Container> */}
        <div className="flex items-center justify-between ">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium flex gap-10"
          >
            <div className="flex justify-center items-center gap-2 font-bold lg:text-2xl">
              <p className=" lg:text-white text-5xl">
                {" "}
                <span className="text-amber-500">E</span>vento
              </p>
            </div>
            <div className="mr-4 menu  hidden lg:block">
              {navList}
            </div>
          </Typography>
          <div className="flex  items-center gap-2">

            {user ? (
              <div className="md:flex justify-between items-center gap-4 hidden ">
                <p className="text-white text-xl inline">{user.displayName}</p>
                <img
                  className="w-10 h-10 rounded-full inline ml-4"
                  src={user.photoURL}
                  alt=""
                />
                <Button onClick={handleSignout} className="btn1 text-lg">
                  Signout
                </Button>
              </div>
            ) : (
              <Link to="/signin" className="flex items-center gap-x-1">
                <Button
                  variant="gradient"
                  size="sm"
                  className="hidden btn1 lg:inline-block md:text-lg"
                >
                  <span>Sign in</span>
                </Button>
              </Link>
            )}
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>

        <Collapse open={openNav}>
          {navList}
          {user ? (
            <div className="flex flex-col-reverse justify-between items-center gap-4 ">
              <div className="bg-blue-gray-800 p-4 my-2 rounded-md">
                <p className="text-white text-xl inline">{user.displayName}</p>
                <img
                  className="w-10 h-10 rounded-full inline ml-4"
                  src={user.photoURL}
                  alt=""
                />
              </div>
              <Button onClick={handleSignout} className="btn1 text-lg">
                Signout
              </Button>
            </div>
          ) : (
            <Link to="/signin" className="flex items-center gap-x-1">
              <Button
                onClick={handleSignout}
                className="btn1 text-lg"
                fullWidth
              >
                <span>Sign in</span>
              </Button>
            </Link>
          )}
        </Collapse>
        {/* </Container> */}
      </div>
    </Navbar>
  );
};

export default NavbarPage;
