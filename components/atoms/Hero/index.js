import React from "react";
import { Container } from "../../molecules";

const Hero = () => {
  return (
    <div className="Hero h-screen">
      <Container>
        <div className="h-screen relative text-center">
          <div className="bg-[url('/assets/svgs/geo.svg')] bg-hero bg-bottom bg-no-repeat absolute h-80 w-80 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"></div>
          <div className="h-full flex flex-col justify-center items-center ">
            <h1 className="m-4 text-7xl font-bold uppercase">Void </h1>
            <h2 className="m-2 text-4xl font-thin">Create and Build</h2>
            <p className="m-2 text-2xl font-thin">
              Work on big ideas and make it to reality
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
