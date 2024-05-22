import {
  Avatar,
  Card,
  CardBody,
  CardHeader,
  Rating,
  Typography,
} from "@material-tailwind/react";

const Review = () => {
  return (
    <div className="py-4 md:mb-10">
        <div className="text-5xl font-bold flex justify-center p-10 text-light-blue-900">Client Reviews</div>
     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
     <Card
        color="transparent"
        shadow={false}
        className="w-full max-w-[26rem] bg-gradient-to-b from-[#203A43] to-[#2c5364] text-white px-8"
      >
        <CardHeader
          color="transparent"
          floated={false}
          shadow={false}
          className="mx-0 flex items-center gap-4 pt-0 pb-8"
        >
          <Avatar
            size="lg"
            variant="circular"
            src="./asset//jason-goodman-bzqU01v-G54-unsplash.jpg"
          />
          <div className="flex w-full flex-col gap-0.5">
            <div className="flex items-center justify-between">
              <Typography variant="h5" color="white">
              Mahir
              </Typography>
              <div className="flex items-center mt-2.5 mb-5">
                <Rating readonly value={4} />

                <span className="bg-blue-100 text-[#53346D] text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-[#53346D] ml-3">
                  4.0
                </span>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardBody className="mb-6 p-0">
          <Typography>
            {" "}
            It is very versatile and user friendly for the most part. But the
            best part of this software is the staff. They are very responsive to
            customer questions and requests and go the extra mile to make sure
            that I get what I need to run the business.
          </Typography>
        </CardBody>
      </Card>
     <Card
        color="transparent"
        shadow={false}
        className="w-full max-w-[26rem] bg-gradient-to-b from-[#203A43] to-[#2c5364] text-white px-8"
      >
        <CardHeader
          color="transparent"
          floated={false}
          shadow={false}
          className="mx-0 flex items-center gap-4 pt-0 pb-8"
        >
          <Avatar
            size="lg"
            variant="circular"
            src="./asset//ben-den-engelsen-YUu9UAcOKZ4-unsplash (2).jpg"
          />
          <div className="flex w-full flex-col gap-0.5">
            <div className="flex items-center justify-between">
              <Typography variant="h5" color="white">
              Chinmoy
              </Typography>
              <div className="flex items-center mt-2.5 mb-5">
                <Rating readonly value={3} />

                <span className="bg-blue-100 text-[#53346D] text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-[#53346D] ml-3">
                  3.0
                </span>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardBody className="mb-6 p-0">
          <Typography>
            {" "}
            User friendly for the most part. But the
            best part of this software is the staff. They are very responsive to
            customer questions.
          </Typography>
        </CardBody>
      </Card>
     <Card
        color="transparent"
        shadow={false}
        className="w-full max-w-[26rem] bg-gradient-to-b from-[#203A43] to-[#2c5364] text-white px-8"
      >
        <CardHeader
          color="transparent"
          floated={false}
          shadow={false}
          className="mx-0 flex items-center gap-4 pt-0 pb-8"
        >
          <Avatar
            size="lg"
            variant="circular"
            src="./asset//img_927893_6c4eda7_1666366925184_sc.jpg"
          />
          <div className="flex w-full flex-col gap-0.5">
            <div className="flex items-center justify-between">
              <Typography variant="h5" color="white">
              Abir
              </Typography>
              <div className="flex items-center mt-2.5 mb-5">
                <Rating readonly value={5} />

                <span className="bg-blue-100 text-[#53346D] text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-[#53346D] ml-3">
                  5.0
                </span>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardBody className="mb-6 p-0">
          <Typography>
            {" "}
            Versatile and user friendly for the most part. But the
            best part of this software is the staff. They are very responsive to
            customer questions and requests and go the extra mile.
          </Typography>
        </CardBody>
      </Card>
     <Card
        color="transparent"
        shadow={false}
        className="w-full max-w-[26rem] bg-gradient-to-b from-[#203A43] to-[#2c5364] text-white px-8"
      >
        <CardHeader
          color="transparent"
          floated={false}
          shadow={false}
          className="mx-0 flex items-center gap-4 pt-0 pb-8"
        >
          <Avatar
            size="lg"
            variant="circular"
            src="./asset//ben-den-engelsen-YUu9UAcOKZ4-unsplash (2).jpg"
          />
          <div className="flex w-full flex-col gap-0.5">
            <div className="flex items-center justify-between">
              <Typography variant="h5" color="white">
              Harry
              </Typography>
              <div className="flex items-center mt-2.5 mb-5">
                <Rating readonly value={4} />

                <span className="bg-blue-100 text-[#53346D] text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-[#53346D] ml-3">
                  4.0
                </span>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardBody className="mb-6 p-0">
          <Typography>
            {" "}
            It is very versatile and user friendly for the most part. But the
            best part of this software is the staff. They are very responsive to
            customer questions.
          </Typography>
        </CardBody>
      </Card>
     <Card
        color="transparent"
        shadow={false}
        className="w-full max-w-[26rem] bg-gradient-to-b from-[#203A43] to-[#2c5364] text-white px-8"
      >
        <CardHeader
          color="transparent"
          floated={false}
          shadow={false}
          className="mx-0 flex items-center gap-4 pt-0 pb-8"
        >
          <Avatar
            size="lg"
            variant="circular"
            src="./asset//joseph-gonzalez-iFgRcqHznqg-unsplash.jpg"
          />
          <div className="flex w-full flex-col gap-0.5">
            <div className="flex items-center justify-between">
              <Typography variant="h5" color="white">
              Pritom
              </Typography>
              <div className="flex items-center mt-2.5 mb-5">
                <Rating readonly value={3} />

                <span className="bg-blue-100 text-[#53346D] text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-[#53346D] ml-3">
                  3.0
                </span>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardBody className="mb-6 p-0">
          <Typography>
            {" "}
            The best part of this software is the staff. They are very responsive to
            customer questions and requests and go the extra mile to make sure
            that I get what I need to run the business.
          </Typography>
        </CardBody>
      </Card>
     <Card
        color="transparent"
        shadow={false}
        className="w-full max-w-[26rem] bg-gradient-to-b from-[#203A43] to-[#2c5364] text-white px-8"
      >
        <CardHeader
          color="transparent"
          floated={false}
          shadow={false}
          className="mx-0 flex items-center gap-4 pt-0 pb-8"
        >
          <Avatar
            size="lg"
            variant="circular"
            src="./asset//aditya-chinchure-ZhQCZjr9fHo-unsplash.jpg"
          />
          <div className="flex w-full flex-col gap-0.5">
            <div className="flex items-center justify-between">
              <Typography variant="h5" color="white">
              Sakib
              </Typography>
              <div className="flex items-center mt-2.5 mb-5">
                <Rating readonly value={5} />

                <span className="bg-blue-100 text-[#53346D] text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-[#53346D] ml-3">
                  5.0
                </span>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardBody className="mb-6 p-0">
          <Typography>
            {" "}
            It is very versatile and user friendly for the most part. But the
            best part of this software is the staff.
          </Typography>
        </CardBody>
      </Card>

     </div>
    </div>
  );
};

export default Review;
