export default function Header() {
  return (
    <div className="p-7 min-w-full flex justify-center items-center bg-black ">
      <ul className="w-full flex justify-center items-center  text-sm font-medium text-white ">
        <li>
          <a href="/Home" className="hover:underline me-4 md:me-6">
            Home
          </a>
          <a href="/About" className="hover:underline me-4 md:me-6">
            About
          </a>
          <a href="/Contact" className="hover:underline me-4 md:me-6">
            Contact
          </a>
          <a href="/Booking" className="hover:underline me-4 md:me-6">
            Booking
          </a>
        </li>
      </ul>
    </div>
  );
}
