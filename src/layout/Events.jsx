import axios from "axios";
import { useEffect, useState } from "react";
import EventDetails from "./EventDetails";

const Events = () => {
    const [events, setEvents] = useState();

    useEffect(() => {
        axios
          .get("https://event-management-server-nu.vercel.app/events", {
          })
          .then((res) => {
            setEvents(res.data);
          });
        
       
        }, []);

        console.log(events);
    return (
        <div className="p-4 md:p-14 ">
        <h1 className="text-5xl font-bold text-center mb-10 text-light-blue-900">Our Services & Features Below</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
             {
            events?.map((data ,idx) => <EventDetails key={idx} data={data}></EventDetails>)
             }
       </div>

    </div>
    );
};

export default Events;