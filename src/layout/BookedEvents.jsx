import { useContext } from "react";
import { AuthProvider } from "./FirebaseAuth";
import { useQuery } from "@tanstack/react-query";
import { getUserbookedEvents } from "./APIs/users";
import EventDetails from "./EventDetails";

const BookedEvents = () => {
    const {user} = useContext(AuthProvider);


    const { data  } = useQuery({
        queryKey: ["user booked"],
        queryFn: () => getUserbookedEvents(user.email),
      });
      console.log(data);
    return (
    <div className="p-4 md:p-14 ">
       
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-10">
             {
            data?.map((data ,idx) => <EventDetails key={idx} data={data}></EventDetails>)
             }
       </div>

    </div>
    );
};

export default BookedEvents;