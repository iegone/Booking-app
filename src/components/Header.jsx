import Logo from "./Global/logo";
import MyBookingButton from "./Global/MyBookingButton";
function Header() {
  return (
    <header className="w-full flex justify-center items-center bg-primary h-16">
      <div className="container flex items-center justify-between">
        <div className=" text-2xl font-bold text-text rounded-md capitalize">
          <Logo />
        </div>
        <div>
          <MyBookingButton />
        </div>
      </div>
    </header>
  );
}

export default Header