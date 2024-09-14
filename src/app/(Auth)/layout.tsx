import Logo from "@/Icons/Logo";
import Link from "next/link";

const layout = ({ children }) => {
  return (
    <div className="h-screen w-screen flex">
      <aside className="h-screen w-[200px] bg-burgundy-900 flex flex-col py-16 justify-between">
        <div className="w-full flex place-content-center items-center">
          <Link href={'/'}>
            <Logo className={"size-28"} fill={"white"}></Logo>
          </Link>
        </div>

        <div className="h-20 flex flex-col gap-12 items-end">
          <button className="py-3 px-5 bg-white rounded-s-full">
            Iniciar sesion
          </button>
        </div>
      </aside>

      <main className="flex place-content-center items-center p-20 w-full h-screen">
        {children}
      </main>
    </div>
  );
};

export default layout;
