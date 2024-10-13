import SignUpForm from "@/components/auth/SignUpForm";

const page = () => {
  return (
    <main className="flex place-content-center items-center [grid-area:main] w-full h-full   pt-4">
      <div className=" ">
        <SignUpForm></SignUpForm>
      </div>
    </main>
  );
};

export default page;
