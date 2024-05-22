
const Contact = () => {
    return (
        <div className="py-10 mt-[132px]">
        <div className="flex justify-center items-center ">
          <h2 className="text-4xl text-center font-bold underline text-yellow-700">
            Contact Us
          </h2>
        </div>
        <div className="flex justify-around gap-6 pt-10">
          <div className="space-y-6 border-r-2 border-yellow-500">
            <h2 className="text-2xl font-bold">Talk to Admin</h2>
            <p className="text-xl px-2">
              let’s review the elements that effective Contact Us pages have
              in common to learn about the features and best practices you
              should remember to include
            </p>
            <p className="text-xl">
              {" "}
              <span className="font-bold text-yellow-700">
                Contact No:
              </span>{" "}
              +8801836452965
            </p>
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Talk to Customer service</h2>
            <p className="text-xl">
              Include an email and phone number so visitors can get in touch
              with you on their first attempt. Include a short form using
              fields help your business
            </p>
            <p className="text-xl">
              {" "}
              <span className="font-bold text-yellow-700">
                Contact No:
              </span>{" "}
              +880153049867
            </p>
          </div>
        </div>
      </div>
    );
};

export default Contact;