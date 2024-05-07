import React from "react";
import { Inc } from "./assets";

const HeroCard = ({ title, value, count, icon, className }) => {
  return (
    <div className={`max-w-[202px] max-h-[112px] rounded-2xl flex flex-col gap-[8px] p-[24px] ${className}`}>
      <div className="text-[14px] font-semibold leading-0.2">{title}</div>

      <div className="flex justify-between items-center">
        <div className="text-[24px] font-semibold leading-0.36">{value}</div>
        <div className="flex items-center gap-[4px]">
          <span className="text-[12px] leading-0.18">{count}</span>
          <span>{icon}</span>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
