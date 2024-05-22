import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthProvider } from "./FirebaseAuth";
import swal from "sweetalert";
import axios from "axios";


const Register = () => {
    const { register, ProfileUpdate } = useContext(AuthProvider);
    const [name, setName] = useState("");
    const [photo, setImg] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [checked, setChecked] = useState(false);
    const [error, setError] = useState(null);
    
    const handleName = (e) => {
        setName(e.target.value);
    };
    const handleImg = (e) => {
      setImg(e.target.value);
    };
    const handleEmail = (e) => {
      setEmail(e.target.value);
    };
    const handlePass = (e) => {
      setPass(e.target.value);
    };

    const handleRegister = () => {
        setError(null)
        console.log(name,photo);
                        
        
            register(email, pass)
              .then(() => {
                   location.reload();
                   swal("Registration Success!", "Stay with us", "success");
                   ProfileUpdate(name, photo)
                        .then(() => {
                            console.log(name,photo);
                        })
                        .catch((error) => {
                        console.log(error.message);
                         
                        })
                    

                    setName("");
                    setImg("");
                    setEmail("");
                    setPass("");

                })
                .catch((error) => {
                    console.log(error.message);
                });

                const user = {
                  userEmail : email,
                  userPhoto : photo,
                  role: "user",
                  userName: name,
                  rqstPrem : "none"
                }
                console.log(user);

                axios
                .post("https://event-management-server-nu.vercel.app/users", user )
                .then((response) => {
                  console.log(response.data);
                })
                .catch((error) => {
                  console.log(error);
                });
        
            setChecked(false);
        

        
    }

    return (
        <div className="min-h-screen flex justify-center items-center mt-[100px] lg:mt-[50px]">
        <div className="relative flex w-[90vw] md:w-[50vw] lg:w-[27vw] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative mx-4 -mt-6 mb-4 grid h-28 place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-[#085078] to-[#85D8CE]  bg-clip-border text-white shadow-lg shadow-[#85a6d8]">
            <h3 className="block font-sans text-3xl font-semibold leading-snug tracking-normal text-white antialiased">
              Register
            </h3>
          </div>
  
          <div className="flex flex-col gap-4 p-6">
            <div className="relative h-11 w-full min-w-[200px]">
              <input
                value={name}
                onChange={handleName}
                type="text"
                className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#085078] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
              />
              <label className=" before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#085078] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#085078] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#085078] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Your Name
              </label>
            </div>
            <div className="relative h-11 w-full min-w-[200px]">
              <input
                value={photo}
                onChange={handleImg}
                type="text"
                className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#085078] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#085078] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#085078] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#085078] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Image URL
              </label>
            </div>
            <div className="relative h-11 w-full min-w-[200px]">
              <input
                value={email}
                onChange={handleEmail}
                type="email"
                className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#085078] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#085078] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#085078] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#085078] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Email
              </label>
            </div>
            <div className="relative h-11 w-full min-w-[200px]">
              <input
                value={pass}
                onChange={handlePass}
                type="password"
                className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#085078] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#085078] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#085078] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#085078] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Password
              </label>
            </div>
        
                        {error && <p className=" text-sm text-red-500">{ error}</p>}
           
            <div className="-ml-2.5">
              <div className="inline-flex items-center">
                <label
                  className="relative flex cursor-pointer items-center rounded-full p-3"
                  data-ripple-dark="true"
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                    className=" before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-[#085078] checked:bg-[#085078] checked:before:bg-[#085078]hover:before:opacity-10"
                    id="checkbox"
                  />
                  <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth={1}
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </label>
                <label className="mt-px cursor-pointer select-none font-bold text-gray-700">
                  Accept terms and conditions
                </label>
              </div>
            </div>
          </div>
          <div className="p-6 pt-0">
            <button
              onClick={handleRegister}
              className="block w-full select-none rounded-lg bg-gradient-to-tr from-[#085078] to-[#85D8CE] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-[#85D8CE] transition-all hover:shadow-lg hover:shadow-[#085078] 40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-light="true"
            >
              Register
            </button>
            <p className="mt-6 flex justify-center font-sans text-sm font-light leading-normal text-inherit antialiased">
              Have an account?
              <Link
                to="/signin"
                className="ml-1 block font-sans text-sm font-bold leading-normal text-[#085078] antialiased"
              >
                Signin
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
};

export default Register;