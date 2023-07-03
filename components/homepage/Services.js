import Image from "next/image";
const Services = () => {
  return (
    <>
      <div className="my-36 ">
        <div className="w-[95%] md:w-[70%] mx-auto mt-36">
          <h2 className="md:px-32 text-center text-3xl font-semibold">
            We provide awesome <span className="text-[#00BD57]">services</span>{" "}
            for individuals and startups to excel
          </h2>
        </div>
        {/* Container */}
        <div className="md:w-[85%] mx-auto mt-16 flex flex-col md:flex-row gap-12 md:gap-8 justify-center items-center">
          {/* left */}
          <div className="flex-1 flex flex-col items-center justify-between">
            <div>
              <Image
                src={"/images/homepage/service-1.png"}
                width={330}
                height={330}
                alt="Services"
              />
            </div>
            <div className="w-[80%] mx-auto text-center text-lg">
              <h3>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry &apos;s standard
                dummy text ever since the 1500s, when an unknown printer took
              </h3>
            </div>
          </div>
          {/* right */}
          <div className="flex-1 flex flex-col items-center justify-between">
            <div>
              <Image
                src={"/images/homepage/Interview.png"}
                width={330}
                height={330}
                alt="Interview"
              />
            </div>
            <div className="w-[80%] mx-auto text-center text-lg">
              <h3>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry &apos;s standard
                dummy text ever since the 1500s, when an unknown printer took
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
