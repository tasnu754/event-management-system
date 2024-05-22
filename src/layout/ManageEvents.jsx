import { useQuery } from "@tanstack/react-query";
import { deleteEvent, getAllBiodatas } from "./APIs/users";
import { AuthProvider } from "./FirebaseAuth";
import { useContext } from "react";
import { MdDeleteForever } from "react-icons/md";
import { Card, Typography } from "@material-tailwind/react";
import { FaRegEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
const TABLE_HEAD = [
    "Event",
    "Price",
    "Edit",
    "Delete"
  ];

const ManageEvents = () => {
    const {user} = useContext(AuthProvider);

    const { data: table = [], refetch } = useQuery({
        queryKey: ["Manage events"],
        queryFn: () => getAllBiodatas(),
      });

      const handleDelete = async (id) => {
        await deleteEvent(id);
 
        await refetch();
        Swal.fire({
          icon: "error",
          title: "Done...",
          text: "Deleted Successfully!",
        });
      };

    const TABLE_ROWS = table.filter((item) => item.userEmail != user.email);

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
              {TABLE_ROWS.map(({ name, price, _id }) => (
                <tr key={name} className="even:bg-blue-gray-50/50">
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal text-lg"
                    >
                      {name}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal text-lg"
                    >
                      {price}
                    </Typography>
                  </td>

                  <td className="p-4">
                     <Link to={`/dashboard/updateEvent/${_id}`}>
                     <button
                        
                        color="blue-gray"
                        className="font-medium"
                      >
                        <FaRegEdit className="w-7 h-7 text-teal-600"></FaRegEdit>
                      </button>
                     </Link>
                    </td>
                  <td className="p-4">
                      <button
                        onClick={() => handleDelete(_id)}
                        color="blue-gray"
                        className="font-medium"
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

export default ManageEvents;