import { useContext } from "react";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { AuthProvider } from "./FirebaseAuth";
import Swal from "sweetalert2";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthProvider);

    if (loading) {
         return <span className="loading loading-spinner text-success"></span>;
    }
    
    if (user) {
        return children;
    }

    Swal.fire("Please Login first!");
     
    return <Navigate to="/signin"></Navigate>
    

};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;