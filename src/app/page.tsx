import Footer from "@/components/global/Footer";
import Header from "@/components/global/Header";
import Hero from "@/components/Landing/Hero";
import Section2 from "@/components/Landing/Section2/Section2";
import Section3 from "@/components/Landing/Section3/Section3";

export default async function Home() {
  const landing = true;
  return (
    <>
      <Header landing={landing}></Header>
      <main className="bg-white flex flex-col min-h-screen gap-6">
        <Hero></Hero>
        <Section2></Section2>
        <Section3></Section3>
      </main>

      <Footer></Footer>
    </>
  );
}
