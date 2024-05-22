import { useLoaderData } from "react-router-dom";
import { AuthProvider } from "./FirebaseAuth";
import { useContext } from "react";
import { addfav, bookedEvent } from "./APIs/users";
import Swal from "sweetalert2";

const EventPage = () => {
  const loadData = useLoaderData();
  const {user} = useContext(AuthProvider);

  


  const handlebook = async() => {
    const booked = {
      userEmail : user.email,
      ...loadData
    }
    console.log(booked);
    await bookedEvent(booked);
        // await refetch();
        Swal.fire({
          title: "Booked!",
          text: "We will contact you soon!",
          icon: "success",
        });

  };
  const handlefav = async() => {
    const fav = {
      userEmail : user.email,
      ...loadData
    }
    console.log(fav);
    await addfav(fav);
        // await refetch();
        Swal.fire({
          title: "Added!",
          text: "See Favourite section!",
          icon: "success",
        });

  };

  return (
    <div className="mt-[100px]  bg-blue-100 text-cyan-900">
      <div>
        <h1 className="text-5xl font-extrabold text-center p-10">
          We focus on your desire
        </h1>
        <div className="lg:flex gap-4 lg:p-10 text-sky-900 bg-sky-100">
          <div className="relative  max-h-[70vh] overflow-hidden ">
            <img className="rounded-md h-full w-full object-cover" src={loadData?.image_url} alt="" />
          </div>

          <div className="p-6 lg:p-8 flex-grow-1 space-y-4 items-center ">
            <h3 className="text-2xl font-bold">{loadData?.name}</h3>
            <p className="text-xl">{loadData?.details}</p>
            <div className="flex justify-between text-xl font-bold">
              <p>Price: {loadData?.price}</p>
              <p>Reviews: {loadData?.reviews_count}k</p>
            </div>
            <div className="md:flex flex-col space-y-4 justify-between">
              <p className="text-xl font-bold">
                Loaction: <span> {loadData?.location}</span>
              </p>
              <p className="text-xl font-bold">
                Working Duration: {loadData?.duration}
              </p>
            </div>

            <div className="flex justify-between">
              <p className="text-xl font-bold">
                Availability: {loadData?.availability}
              </p>

              <p className="text-xl font-bold">Rating: {loadData?.rating}</p>
            </div>
            <div className="flex justify-between">
            <button onClick={handlebook} className="btnSignin ">
              Book now
            </button>
            <button 
            onClick={handlefav} className="btnSignin ">
              Favourite
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
