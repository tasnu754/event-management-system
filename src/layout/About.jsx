const About = () => {
  return (
    <div className=" p-4 pt-8 bg-gradient-to-b from-[#360033] to-[#0b8793]"
    data-aos="zoom-in-down"
    data-aos-delay="500"
    data-aos-duration="1000"
    data-aos-offset="200">
      <div className="text-5xl font-bold flex justify-center p-8 text-white">
        {" "}
        <span className="text-yellow-700">About</span> Us
      </div>
      <div className="lg:flex justify-around gap-6">
        <div className="relative w-full max-h-[80vh] overflow-hidden ">
          <img
            src="./asset//jason-goodman-bzqU01v-G54-unsplash.jpg"
            alt=""
            className="h-full w-full object-cover group-hover:scale-125 transition-transform duration-500"
          />

        </div>
        <div className="m-4 md:m-8 lg:m-0">
          <div className="text-3xl font-bold mb-6 mt-8 lg:mt-0 text-yellow-800">
            Hello! We Are a Event Managment agency
          </div>
          <div className="text-xl mb-6 text-white">
            Event Management Plan means a plan, acceptable to the Association,{" "}
            <br />
            developed by the Recipient for each Project site in accordance with{" "}
            <br />
            the Social Impact Assessment, setting out guidelines to implement
            and  monitor social mitigation and enhancement measures, and to
            address <br /> adverse social impacts of the Project.
          </div>
          <div className="text-xl text-white">
            <div className="text-2xl font-bold mb-4 text-yellow-800 ">Our philosophy</div>
            Evento ltd is an event logistics and marketing company which was <br />formed back in 2013. The company offers
            A-Z event planning services <br />from a team of experienced and energetic
            event planners, suppliers, <br /> venues and more. One of the main reasons
            behind the success of Event Planner is the fact that the team does
            not charge fees to its clients!
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
