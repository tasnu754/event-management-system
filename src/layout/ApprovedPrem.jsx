import { useQuery } from "@tanstack/react-query";
import { changePrem, getAllUsers } from "./APIs/users";
import { Card, Typography } from "@material-tailwind/react";
import Swal from "sweetalert2";

const TABLE_HEAD = [
    "User name",
    "Email",
    "Premium Requsted",
  ];

const ApprovedPrem = () => {

    const { data: table = [], refetch } = useQuery({
        queryKey: ["users data"],
        queryFn: () => getAllUsers(),
      });

      const handlePremium = async (userEmail, role) => {
        await changePrem(userEmail, role);
        await refetch();
        Swal.fire({
          title: "Updated!",
          text: `Made the user ${role} successfully!`,
          icon: "success",
        });
      };

    const TABLE_ROWS = table.filter((item) => item.rqstPrem == "Requested");


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
              {TABLE_ROWS.map(({ userEmail, userName, rqstPrem}) => (
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
                      onClick={() => handlePremium(userEmail , "Approved")}
                      color="blue-gray"
                      className={`font-medium ${
                        rqstPrem !== "Requested" ? "bg-green-300" : "bg-red-200 "
                      }  p-2 rounded-md ${
                        rqstPrem === "Admin"
                          ? "hover:bg-green-300"
                          : "hover:bg-red-300"
                      }  `}
                    >
                      {rqstPrem === "Requested" ? "Approve" : "No request"}
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

export default ApprovedPrem;