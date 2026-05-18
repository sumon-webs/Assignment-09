import Hero from "@/components/HomPage/Hero";
import HowWeWork from "@/components/HomPage/HowWeWork";
import TopRatedDoctors from "@/components/HomPage/TopRatedDoctors";

export default function Home() {
  return (
    <div>
      <Hero />
      <TopRatedDoctors />
      <HowWeWork />
    </div>
  );
}
