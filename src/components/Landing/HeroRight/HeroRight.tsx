import Button from "@/components/ui/Button";
import { Check, SearchBook } from "@/Icons/Landing";
import AuthBox from "@/components/global/AuthBox";
import PowerPointCard from "./PowerPointCard";
import { getFakeAuth } from "@/services/getFakeAuth";
import { getAuth } from "@/services/getAuth";
import { Rectangulo } from "@/Icons/Rectangulo";
import { FAKEUSERINDEX } from "@/constants/fakeUser";
import WhiteCircle from "@/Icons/WhiteCircle";
import  Cookies from 'js-cookie'

const HeroRight = async () => {
  // const token = Cookies.get('access_token');
  // console.log('token hero right')
  // console.log(token)
  // const user = await getFakeAuth(FAKEUSERINDEX)
  const user = await getAuth()
  return (
    <div className="rounded-lg bg-burgundy-950 w-[500px]  relative overflow-hidden">

      <div className="absolute -bottom-[30%]  w-full h-[300px]  elipse2"></div>
      <div className="absolute -top-[30%] -right-[40%]  w-full h-[300px]  elipse1"></div>

      <div className="flex flex-col gap-4 h-full w-full glass px-4 py-4 ">
        <div className="w-full self-end">
          <AuthBox user={user}></AuthBox>
        </div>


        <div className="flex px-6 pb-4 gap-2 flex-1 relative">
        <div  className="absolute top-[10%] right-[25%] h-4/5 w-1/2"><Rectangulo></Rectangulo></div>
          <div className="flex flex-col justify-between pb-8 w-1/2 ">
            <article className="bg-black rounded-xl w-full h-36 flex flex-col justify-between px-4 py-2  items-center text-white z-10 shadow-shadowBlack">
              <strong className="text-2xl">+200</strong>
              <p className="text-center">Observatorios Activos</p>
              <div className="w-full flex gap-4 place-content-center items-center">
                <div className="flex relative">
                  <WhiteCircle ></WhiteCircle>
                  <WhiteCircle className={"-ml-8"}></WhiteCircle >
                  <WhiteCircle className={"-ml-8"}></WhiteCircle>
                </div>
                <Button className="text-black px-4">Únete</Button>
              </div>
            </article>
            <article className=" bg-black rounded-xl size-20 self-center flex place-content-center items-center z-10 shadow-shadowBlack">
              <SearchBook></SearchBook>
            </article>
            
          </div>
          <div className="flex items-end w-1/2">
            <article className="bg-black rounded-xl  w-full flex flex-col px-2 py-4 items-center text-white gap-3 z-10 shadow-shadowBlack ">
              <strong>Garantizamos</strong>
             <PowerPointCard text={"Observaciones Actualizadas"}></PowerPointCard>
             <PowerPointCard text={"Innovación y Desarrollo"}></PowerPointCard>
             <PowerPointCard text={'Información Confiable'}></PowerPointCard>
             <PowerPointCard text={"Accesibilidad Universal"}></PowerPointCard>
            </article>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default HeroRight;
