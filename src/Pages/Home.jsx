import React from "react";
import uniqueId from "../assets/images/uniqueId.jpg";
import GenerateId from "../Components/GenerateId";

const Home = () => {
  return (
    <>
      <section className="flex justify-center  items-center h-screen">
        <div className="px-5 xl:px-0">
          <div className="px-5 xl:px-0">
          <h1 className="text-center text-black text-5xl leading-9 font-bold mb-4">
            UniqueId Generator
          </h1>
          </div>

          <div className="max-w-[1170px] mx-auto">
            <div className="rounded-lg m-10 md:p-10 md:shadow-md grid grid-cols-1 lg:grid-cols-3">
              <div className="lg:block rounded-l-lg col-span-1">
                <figure className="rounded-l-lg">
                  <img
                    src={uniqueId}
                    alt="register"
                    className="rounded-lg w-full"
                  />
                </figure>
              </div>

              <div className="rounded-l-lg py-5 text-center lg:pl-16 col-span-2">
                <h3 className="text-black text-[24px] leading-9 font-bold mb-1">
                  Generate your{" "}
                  <span className="text-orange-700">UniqueId</span> now
                </h3>

                <GenerateId />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
