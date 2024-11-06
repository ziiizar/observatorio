import GraphicsNavbar from "@/components/Servicios/TabBar/GraphicsNavbar";
import { fetchPatents } from "@/data/patents";
import { fetchRegistros } from "@/data/registros";
import { formatRegistros } from "@/lib/utils";
import { Registros } from "@/types/registro";
// import Button from "@/components/ui/Button";

const page = async () => {
  // const patentData = [
  //   { id: "US", country: "United States", color: "#FF6384", cant: 5000 },
  //   { id: "CN", country: "China", color: "#36A2EB", cant: 4500 },
  //   { id: "JP", country: "Japan", color: "#FFCE56", cant: 3000 },
  //   { id: "DE", country: "Germany", color: "#4BC0C0", cant: 1500 },
  //   { id: "KR", country: "South Korea", color: "#F7464A", cant: 1200 },
  //   { id: "FR", country: "France", color: "#46BFBD", cant: 900 },
  //   { id: "GB", country: "United Kingdom", color: "#FDB45C", cant: 800 },
  //   { id: "IN", country: "India", color: "#949FB1", cant: 700 },
  //   { id: "CA", country: "Canada", color: "#4D5360", cant: 600 },
  //   { id: "IT", country: "Italy", color: "#FF9F40", cant: 500 },
  // ];

  const patentes = await fetchPatents({});
  const registros = await fetchRegistros({})
  const formatedRegistros = registros.map((item: Registros) =>
    formatRegistros(item)
  );

  // const registrationData = [
  //   { year: 1990, cant: 120 },
  //   { year: 1991, cant: 150 },
  //   { year: 1992, cant: 170 },
  //   { year: 1993, cant: 160 },
  //   { year: 1994, cant: 180 },
  //   { year: 1995, cant: 200 },
  //   { year: 1996, cant: 220 },
  //   { year: 1997, cant: 250 },
  //   { year: 1998, cant: 230 },
  //   { year: 1999, cant: 260 },
  //   { year: 2000, cant: 300 },
  //   { year: 2001, cant: 280 },
  //   { year: 2002, cant: 320 },
  //   { year: 2003, cant: 340 },
  //   { year: 2004, cant: 360 },
  //   { year: 2005, cant: 380 },
  //   { year: 2006, cant: 400 },
  //   { year: 2007, cant: 420 },
  //   { year: 2008, cant: 450 },
  //   { year: 2009, cant: 430 },
  //   { year: 2010, cant: 480 },
  //   { year: 2011, cant: 500 },
  //   { year: 2012, cant: 520 },
  //   { year: 2013, cant: 550 },
  //   { year: 2014, cant: 580 },
  //   { year: 2015, cant: 600 },
  //   { year: 2016, cant: 620 },
  //   { year: 2017, cant: 650 },
  //   { year: 2018, cant: 670 },
  //   { year: 2019, cant: 700 },
  //   { year: 2020, cant: 720 },
  //   { year: 2021, cant: 750 },
  //   { year: 2022, cant: 780 },
  //   { year: 2023, cant: 800 },
  //   { year: 2024, cant: 830 },
  // ];

  return (
    <main className="[grid-area:main] w-full h-full  flex flex-col  gap-4  overflow-hidden pt-4 px-4 ">
      <GraphicsNavbar
        patentData={patentes}
        registrationData={formatedRegistros}
      ></GraphicsNavbar>
    </main>
  );
};

export default page;
