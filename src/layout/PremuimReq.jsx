import { useContext } from "react";
import { AuthProvider } from "./FirebaseAuth";
import { useQuery } from "@tanstack/react-query";
import { changePrem, getSingleUser } from "./APIs/users";
import { Spinner } from "@material-tailwind/react";
import Swal from "sweetalert2";
import { IoMdHappy } from "react-icons/io";

const PremuimReq = () => {
    const {user} = useContext(AuthProvider);
    
    const { data ,isLoading, refetch } = useQuery({
        queryKey: ["biodata"],
        queryFn: () => getSingleUser(user?.email),
      });
      // console.log(data.rqstPrem);
      console.log(user);

      const handleMakePremium = async () => {
          
          Swal.fire({
            title: "Are you sure to make your profile premium?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Yes",
            denyButtonText: `No`,
          }).then((result) => {
           
            if (result.isConfirmed) {
                changePrem(user?.email, "Requested").then((res) => {
                  console.log(res);
                  refetch();
                  Swal.fire(
                    "Request send! Please wait for admin approval",
                    "",
                    "success"
                  );
                });
               
             
            } else if (result.isDenied) {
              Swal.fire("Can not send the request", "", "info");
            }
          });
    };

      if (isLoading) {
        return <Spinner></Spinner>
       }

    return (
        <div className="p-10  border-r-2 bg-yellow-300 h-full border-2 border-black">
        <div className="h-42 w-42 lg:w-[45%] mx-auto lg:h-[400px] overflow-hidden rounded-full">
          <img
            className="w-full  h-full object-cover"
            src={user?.photoURL}
            alt=""
          />
        </div>
        <h2 className="md:text-2xl font-bold text-yellow-900 text-center pt-6">
          {user?.displayName}
        </h2>
        <h3 className="md:text-2xl font-bold text-yellow-900 text-center pb-6">
          {user?.email}
        </h3>

        {(data?.rqstPrem !== "Approved" || data.rqstPrem === "none") && (
          <div className="w-[50%] mx-auto py-6 text-center">
            <button
              disabled={data.rqstPrem === "Requested"}
              onClick={handleMakePremium}
              type="submit"
              className="btn1  md:w-full  flex items-center justify-center"
            >
              {data?.rqstPrem === "Requested" ? "Requested" : "Make Premium"}
            </button>
          </div>
        )}
        {
            (data?.rqstPrem ==="Approved") &&
            <p className="w-[50%] mx-auto flex flex-row items-center gap-2 py-6 text-center text-2xl font-bold text-gray-700">You are already a Premium Member 
            <IoMdHappy className="text-4xl"></IoMdHappy></p>
        }
      </div>
    );
};

export default PremuimReq;