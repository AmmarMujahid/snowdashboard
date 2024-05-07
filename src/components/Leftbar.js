import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Default,
  OnlineCourses,
  Projects,
  ECommerce,
  UserProfile,
  Account,
  Corporate,
  Blog,
  Social,
  Arrow,
} from "./assets";

const dashboardItems = [
  { title: "Default", logo: <Default />, id: "#default" },
  { title: "eCommerce", logo: <ECommerce />, id: "#ecommerce" },
  { title: "Projects", logo: <Projects />, id: "#projects" },
  { title: "Online Courses", logo: <OnlineCourses />, id: "#onlinecourses" },
];

const pagesItems = [
  { title: "User Profile", logo: <UserProfile />, id: "#userprofile" },
  { title: "Account", logo: <Account />, id: "#account" },
  { title: "Corporate", logo: <Corporate />, id: "#corporate" },
  { title: "Blog", logo: <Blog />, id: "#blog" },
  { title: "Social", logo: <Social />, id: "#social" },
];

const LeftBar = () => {
  return (
    <section className="fixed border-r-[1px] px-[20px] py-[24px] w-[212px] h-screen overflow-auto">
      <div className="flex flex-col">
        <div className="flex gap-[8px] text-[14px] mb-[16px] leading-0.2">
          <Image src="/ByeWind.png" alt="ByeWind" width={24} height={24} />
          <span>ByeWind</span>
        </div>

        <div className="flex flex-col gap-[32px]">
          <div>
            <div className="flex gap-[16px]">
              <span className="text-[#1C1C1C]">Favorites</span>
              <span className="text-[#1C1C1C]">Recently</span>
            </div>

            <ul className="flex flex-col list-disc">
              <li>Overview</li>
              <li>Projects</li>
            </ul>
          </div>

          <div className="flex flex-col gap-[10px]">
            <div>Dashboards</div>
            <ul>
              {dashboardItems.map((item) => (
                <li key={item.id} className="flex gap-[5px] items-center">
                  <Arrow />
                  <span>{item.logo}</span>
                  <Link href={item.id}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-[10px]">
            <div>Pages</div>
            <ul>
              {pagesItems.map((item) => (
                <li key={item.id} className="flex gap-[5px] items-center">
                  <Arrow />
                  <span>{item.logo}</span>
                  <Link href={item.id}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeftBar;
