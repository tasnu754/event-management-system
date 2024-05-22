import { useContext } from "react";
import { AuthProvider } from "./FirebaseAuth";
import { useQuery } from "@tanstack/react-query";
import { getFavEvents } from "./APIs/users";
import EventDetails from "./EventDetails";

const Favourites = () => {
    const {user} = useContext(AuthProvider);

    const { data  } = useQuery({
        queryKey: ["favourites"],
        queryFn: () => getFavEvents(user.email),
      });

      console.log(data);

    return (
        <div className="p-4 md:p-14 ">
       
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
             {
            data?.map((data ,idx) => <EventDetails key={idx} data={data}></EventDetails>)
             }
       </div>

    </div>
    );
};

export default Favourites;