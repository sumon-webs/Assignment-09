import ClientReview from "@/components/HomPage/ClientReview";
import Hero from "@/components/HomPage/Hero";
import HowWeWork from "@/components/HomPage/HowWeWork";
import TopRatedDoctors from "@/components/HomPage/TopRatedDoctors";
export const metadata = {
  title: "DocAppoint Home",
};

export default function Home() {
  return (
    <div>
      <Hero />
      <TopRatedDoctors />
      <HowWeWork />
      <ClientReview />
    </div>
  );
}
