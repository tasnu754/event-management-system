import { useQuery } from "@tanstack/react-query";
import { deleteUserEvent, getUserbookedEvents } from "./APIs/users";
import { useContext } from "react";
import { AuthProvider } from "./FirebaseAuth";
import { Card, Typography } from "@material-tailwind/react";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";

const TABLE_HEAD = [
    "Event",
    "Price",
    "Location",
    "Cancle Booking"
  ];
const ManageUserEvents = () => {
    const {user} = useContext(AuthProvider);

    const { data : table = [], refetch  } = useQuery({
        queryKey: ["user booked"],
        queryFn: () => getUserbookedEvents(user.email),
      });

      const handleDelete = async (id) => {
        console.log(id);
        await deleteUserEvent(id);
 
        await refetch();
        Swal.fire({
          icon: "error",
          title: "Done...",
          text: "Deleted Successfully!",
        });
      };

    const TABLE_ROWS = table.filter((item) => item.userEmail === user.email);

    return (
        <div>
        <Card className="h-full w-full overflow-x-scroll">
          <table className="w-full min-w-max table-auto text-left  ">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4 "
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-bold leading-none opacity-70 text-lg"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map(({ name, price, location, _id }) => (
                <tr key={name} className="even:bg-blue-gray-50/50">
                  <td className="p-4 ">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal text-lg text-light-blue-900"
                    >
                      {name}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal text-lg text-light-blue-900"
                    >
                      {price}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal text-lg text-light-blue-900"
                    >
                      {location}
                    </Typography>
                  </td>
                  <td className="p-4 flex justify-center">
                      <button
                        onClick={() => handleDelete(_id)}
                        color="blue-gray"
                        className="font-medium "
                      >
                        <MdDeleteForever className="w-7 h-7 text-red-800"></MdDeleteForever>
                      </button>
                    </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    );
};

export default ManageUserEvents;