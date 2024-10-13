import { cn } from "@/lib/utils";
import { getAuth } from "@/services/getAuth";
import { AuthUser } from "@/types/user";
import AdminSection from "./AdminSection";
import DirectivoSection from "./DirectivoSection";
import UserSection from "./UserSection";

const Section2 = async () => {
  const user: AuthUser = await getAuth();
  return (
    <section
      className={cn(
        "min-h-screen grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 grid-rows-auto w-full p-2 sm:p-4 md:p-6 gap-2 sm:gap-4 md:gap-6 bg-black text-white"
      )}
    >
      {user?.role === "directivo" ? (
        <DirectivoSection />
      ) : user?.role === "admin" ? (
        <AdminSection />
      ) : (
        <UserSection />
      )}
    </section>
  );
};

export default Section2;