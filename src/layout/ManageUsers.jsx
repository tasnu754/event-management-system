import { useContext } from "react";
import { AuthProvider } from "./FirebaseAuth";
import { useQuery } from "@tanstack/react-query";
import { changeRole, deleteUserContactReq, getAllUsers } from "./APIs/users";
import { Card, Typography } from "@material-tailwind/react";
import Swal from "sweetalert2";
import { MdDeleteForever } from "react-icons/md";

const TABLE_HEAD = [
    "User name",
    "Email",
    "Make admin",
    "Delete User"
  ];

const ManageUsers = () => {
    const {user} = useContext(AuthProvider);

    const { data: table = [], refetch } = useQuery({
        queryKey: ["users data"],
        queryFn: () => getAllUsers(),
      });

      const handlePremium = async(userEmail , role) => {
        console.log(userEmail, role)
        await changeRole(userEmail , role);
         await refetch();
         Swal.fire({
           title: "Updated!",
           text: `Made the user admin successfully!`,
           icon: "success",
         });
  
      };

      const handleDelete = async (id) => {
        await deleteUserContactReq(id);
 
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
              {TABLE_ROWS.map(({ userEmail, userName, role, _id }) => (
                <tr key={userName} className="even:bg-blue-gray-50/50">
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal text-md"
                    >
                      {userName}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {userEmail}
                    </Typography>
                  </td>

                  <td className="p-4">
                    <button
                      onClick={() => handlePremium(userEmail , "Admin")}
                      color="blue-gray"
                      className={`font-medium ${
                        role === "Admin" ? "bg-green-300" : "bg-red-200 "
                      }  p-2 rounded-md ${
                        role === "Admin"
                          ? "hover:bg-green-300"
                          : "hover:bg-red-300"
                      }  `}
                    >
                      {role === "Admin" ? "Admin" : "Make Admin"}
                    </button>
                  </td>
                  <td className="p-4">
                      <button
                        onClick={() => handleDelete(_id)}
                        color="blue-gray"
                        className="font-medium"
                      >
                        <MdDeleteForever className="w-7 h-7"></MdDeleteForever>
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

export default ManageUsers;