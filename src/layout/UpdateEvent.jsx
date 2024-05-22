import { Spinner } from "@material-tailwind/react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { updateEvent } from "./APIs/users";
import Swal from "sweetalert2";

const UpdateEvent = () => {
    const data = useLoaderData();
    const [isSpine, setIsSpine] = useState(false);

    const handleAddBiodata = async (e) =>{
        setIsSpine(true)
        e.preventDefault();
        
      const form = e.target;
      const name = form.name.value;
      const short_description = form.des.value;
      const price = form.price.value;
      const rating = form.rating.value;
      const reviews_count = form.reviews.value;
      const duration = form.duration.value;
      const availability = form.avail.value;
      const location = form.location.value;
      const details = form.details.value;
      const image = form.image.value;

      const event = {
        name,
        image,
        short_description,
        price,
        rating,
        reviews_count,
        duration,
        availability,
        location,
        details
      }

      await updateEvent(data._id, event);
      Swal.fire({
        icon: "success",
        title: "Done...",
        text: "Updated Successfully!",
      });
      setIsSpine(false);
      form.reset();

    }

    console.log(data);
    return (
        <div>
        <section className="bg-white ] dark:bg-gray-900">
          <div className="py-2 px-4 mx-auto max-w-2xl">
            <h2 className="mb-4 text-5xl font-bold text-[#53346D] dark:text-white text-center">
              Update Event
            </h2>
            <form 
            onSubmit={handleAddBiodata}
             action="#">
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-xl font-medium text-[#53346D] dark:text-white"
                  >
                    Event Name
                  </label>
                  <input
                    value={data.name}
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Type name"
                    required
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-xl font-medium text-[#53346D] dark:text-white"
                  >
                    Image URL
                  </label>
                  <input
                    value={data.image_url}
                    type="text"
                    name="image"
                    id="image"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Image"
                    required
                  />
                </div>
                <div className="sm:col-span-2">
                <label
                  htmlFor="description"
                  className="block mb-2 text-xl font-medium text-[#53346D] dark:text-white"
                >
                  Short Description
                </label>
                <textarea
                  value={data.short_description}
                  name="des"
                  id="description"
                  rows={1}
                  className="block p-2.5 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Your description here"
                  defaultValue={""}
                />
              </div>
                

                <div className="w-full">
                  <label
                    htmlFor="age"
                    className="block mb-2 text-xl font-medium text-[#53346D] dark:text-white"
                  >
                    Price
                  </label>
                  <input
                    value={data.price}
                    type="text"
                    name="price"
                    id="price"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="price"
                    required
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="age"
                    className="block mb-2 text-xl font-medium text-[#53346D] dark:text-white"
                  >
                    Rating
                  </label>
                  <input
                    value={data.rating}
                    type="number"
                    name="rating"
                    id="rating"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="rating"
                    required
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="age"
                    className="block mb-2 text-xl font-medium text-[#53346D] dark:text-white"
                  >
                    Reviews Count
                  </label>
                  <input
                    value={data.reviews_count}
                    type="number"
                    name="reviews"
                    id="reviews"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="reviews"
                    required
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="age"
                    className="block mb-2 text-xl font-medium text-[#53346D] dark:text-white"
                  >
                    Duration
                  </label>
                  <input
                    value={data.duration}
                    type="text"
                    name="duration"
                    id="duration"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="duration"
                    required
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="age"
                    className="block mb-2 text-xl font-medium text-[#53346D] dark:text-white"
                  >
                    Availability
                  </label>
                  <input
                    value={data.availability}
                    type="text"
                    name="avail"
                    id="avail"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Availability"
                    required
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="age"
                    className="block mb-2 text-xl font-medium text-[#53346D] dark:text-white"
                  >
                    Location
                  </label>
                  <input
                    value={data.location}
                    type="text"
                    name="location"
                    id="location"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="location"
                    required
                  />
                </div>
                <div className="sm:col-span-2">
                <label
                  htmlFor="description"
                  className="block mb-2 text-xl font-medium text-[#53346D] dark:text-white"
                >
                  Details
                </label>
                <textarea
                  value={data.details}
                  name="details"
                  id="details"
                  rows={3}
                  className="block p-2.5 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="details here"
                  defaultValue={""}
                />
              </div>

              </div>
              <div className="w-[80%] mx-auto py-4 text-center">
                
                  <button type="submit" className="btn1  md:w-full  flex items-center justify-center">
                    {isSpine ? <Spinner className="text-center"></Spinner> : "Update"}
                  </button>

              </div>
            </form>
          </div>
        </section>
      </div>
    );
};

export default UpdateEvent;