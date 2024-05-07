import Hero from "@/components/Hero";
import Marketing from "@/components/Marketing";
import TotalUsers from "@/components/Totalusers";
import Traffic from "@/components/Traffic";
import Image from "next/image";

export default function Home() {
  return (
    <main className="p-[28px]">
      <Hero />
      <TotalUsers />
      <Traffic />
      <Marketing />
    </main>
  );
}
