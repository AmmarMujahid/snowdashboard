import React from "react";
import HeroCard from "./herocard";
import { Dec, DownArrow, Inc } from "./assets";

const Hero = () => {
  return (
    <section>
      <div className="flex flex-col gap-[20px] mb-[28px]">
        <div className="flex gap-[4px]">
          <span className="text-[14px] font-semibold leading-0.2">Today</span>
          <span>
            <DownArrow />
          </span>
        </div>

        <div className="flex items-center gap-[28px]">
          <HeroCard
            className="bg-[#E3F5FF]"
            title="Views"
            value="721K"
            count="+11.01%"
            icon=<Inc />
          />

          <HeroCard
            className="bg-[#E5ECF6]"
            title="Visits"
            value="367K"
            count="-0.03%"
            icon=<Dec />
          />

          <HeroCard
            className="bg-[#E3F5FF]"
            title="New Users"
            value="1,156"
            count="+15.03%"
            icon=<Inc />
          />

          <HeroCard
            className="bg-[#E5ECF6]"
            title="Active Users"
            value="239K"
            count="+6.08%"
            icon=<Inc />
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
