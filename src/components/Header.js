import React from "react";
import { Bell, Mode, Page, Search, SearchItem, Star, Update } from "./assets";

const Header = () => {
  return (
    <section className="border-b-[1px] p-[24px] ">
      <div className="flex justify-between items-center">
        <div className="flex gap-[16px]">
          <Page />
          <Star />
          <span>Dashboards</span>
          <span>/</span>
          <span>Default</span>
        </div>

        <div className="flex items-center gap-[16px]">
          <div className="relative">
            <div className="absolute left-2 top-[9px]">
              <Search />
            </div>
            <div className="absolute right-2 top-[7px]">
              <SearchItem />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="bg-[#1C1C1C] pl-[30px] bg-opacity-5 rounded-lg py-[5px]"
            />
          </div>
          <Mode />
          <Update />
          <Bell />
          <Page />
        </div>
      </div>
    </section>
  );
};

export default Header;
