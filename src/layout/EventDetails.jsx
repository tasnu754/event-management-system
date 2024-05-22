import { useContext } from "react";
import { AuthProvider } from "./FirebaseAuth";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


const EventDetails = ({data}) => {
    const { setDetailsClicked } = useContext(AuthProvider);
    setDetailsClicked(false);

    return (
      <div>
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="card card-side bg-base-100 shadow-xl md:h-[250px]"
        >
          <figure>
            <img
              className="h-[350px] lg:w-[400px]"
              src={data?.image_url}
              alt="Movie"
            />
          </figure>
          <div className="card-body space-y-4">
            <h2 className="card-title md:text-2xl font-bold text-light-blue-900">
              {data?.short_description}
            </h2>
            <p className="font-bold text-xl text-light-blue-800">
              Service Charge: {data?.price}
            </p>
            <div className="card-actions justify-end">
              <Link to={`/eventpage/${data?._id}`}>
                <button
                  onClick={() => setDetailsClicked(true)}
                  className="btnSignin  text-white font-bold"
                >
                  See Details
                </button>
              </Link>
              
            </div>
          </div>
        </div>
       
      </div>
    );
};

EventDetails.propTypes = {
    data: PropTypes.object.isRequired,
  };

export default EventDetails;