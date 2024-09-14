import Header from "../components/Header";

function Landing() {
    const Name = import.meta.env.VITE_NAME;
    const Title = import.meta.env.VITE_TITLE;
    const Profession = import.meta.env.VITE_PROFESSION;

  return (
    <>
      <div className="flex flex-col h-dvh w-dvw items-center">
        <Header />
        <div className="h-screen container grid grid-cols-2  ">
          <div className=" col-span-1 flex flex-col text-left items-left justify-center">
            <h1 className=" font-bold text-8xl capitalize">
              <span className="text-primary">Welcome</span>
              <span className=" text-secondary text-7xl">
                <br /> to {Title}
                {Name} <br /> {Profession}
              </span>
            </h1>
            <a
              className="bg-primary text-2xl text-text font-bold px-8 mt-10 py-2 max-w-max rounded-md capitalize "
              href="/booking"
            >
              book now
            </a>
          </div>
          <div className=" flex items-center justify-center col-span-1">
            <span className="h-96 w-96 bg-primary rounded-full"></span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
