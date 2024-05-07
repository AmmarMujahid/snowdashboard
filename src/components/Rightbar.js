import React from "react";
import Image from "next/image";
import { Bug, NewUser, Subscribe } from "./assets";

const rightBarData = {
  Notifications: [
    {
      id: "1",
      logo: <Bug />,
      title: "You have a bug that needs to be fixed.",
      time: "Just now",
    },
    {
      id: "2",
      logo: <NewUser />,
      title: "New user registered",
      time: "59 minutes ago",
    },
    {
      id: "3",
      logo: <Bug />,
      title: "You have a bug that needs to be fixed.",
      time: "12 hours ago",
    },
    {
      id: "4",
      logo: <Subscribe />,
      title: "Andi Lane subscribed to you",
      time: "Today, 11:59 AM",
    },
  ],

  Activities: [
    {
      id: "1",
      photo: (
        <Image src="/activity1.png" alt="Activity" width={24} height={24} />
      ),
      desc: "You have a bug that needs to be fixed.",
      time: "Just now",
    },
    {
      id: "2",
      photo: (
        <Image src="/activity2.png" alt="Activity" width={24} height={24} />
      ),
      desc: "Released a new version",
      time: "59 minutes ago",
    },
    {
      id: "3",
      photo: (
        <Image src="/activity3.png" alt="Activity" width={24} height={24} />
      ),
      desc: "Submitted a bug",
      time: "12 hours ago",
    },
    {
      id: "4",
      photo: (
        <Image src="/activity4.png" alt="Activity" width={24} height={24} />
      ),
      desc: "Modified A data in Page X",
      time: "Today, 11:59 AM",
    },
    {
      id: "5",
      photo: (
        <Image src="/activity5.png" alt="Activity" width={24} height={24} />
      ),
      desc: "Deleted a page in Project X",
      time: "Feb 2, 2023",
    },
  ],

  Contacts: [
    {
      id: "1",
      picture: (
        <Image src="/contact1.png" alt="Activity" width={24} height={24} />
      ),
      name: "Natali Craig",
    },
    {
      id: "2",
      picture: (
        <Image src="/contact2.png" alt="Activity" width={24} height={24} />
      ),
      name: "Drew Cano",
    },
    {
      id: "3",
      picture: (
        <Image src="/contact3.png" alt="Activity" width={24} height={24} />
      ),
      name: "Orlando Diggs",
    },
    {
      id: "4",
      picture: (
        <Image src="/contact4.png" alt="Activity" width={24} height={24} />
      ),
      name: "Andi Lane",
    },
    {
      id: "5",
      picture: (
        <Image src="/contact5.png" alt="Activity" width={24} height={24} />
      ),
      name: "Kate Morrison",
    },
    {
      id: "6",
      picture: (
        <Image src="/contact6.png" alt="Activity" width={24} height={24} />
      ),
      name: "Koray Okumus",
    },
  ],
};

const RightBar = () => {
  return (
    <section className="fixed border-l-[1px] w-[280px] p-[20px] right-0 top-0 h-screen overflow-auto">
      <div className="flex flex-col gap-[40px]">
        <div className="flex flex-col gap-[20px]">
          <div className="text-[14px] font-semibold leading-0.2">
            Notifications
          </div>
          <ul>
            {rightBarData.Notifications.map((item) => (
              <li key={item.id} className="flex gap-[16px]">
                <span>{item.logo}</span>
                <div className="flex flex-col mb-3">
                  <span className="text-[14px] leading-0.2 line-clamp-1">
                    {item.title}
                  </span>
                  <span className="text-[12px] leading-0.18">{item.time}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-[20px]">
          <div className="text-[14px] font-semibold leading-0.2">
            Activities
          </div>

          <ul>
            {rightBarData.Activities.map((item) => (
              <li key={item.id} className="flex gap-[16px] items-start">
                <span>{item.photo}</span>
                <div className="flex flex-col mb-3">
                  <span className="text-[14px] leading-0.2 line-clamp-1">
                    {item.desc}
                  </span>
                  <span className="text-[12px] leading-0.18">{item.time}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-[20px]">
          <div className="text-[14px] font-semibold leading-0.2">
            Notifications
          </div>
          <ul>
            {rightBarData.Contacts.map((item) => (
              <li key={item.id} className="mb-[10px]">
                <div className="flex items-center gap-[16px]">
                  <span>
                    {item.picture}
                  </span>
                  <span className="text-[14px] leading-0.18">{item.name}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default RightBar;
