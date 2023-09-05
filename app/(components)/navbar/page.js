import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-white text-xl font-semibold">Api APP</div>
          <div className="hidden md:flex space-x-4">
            <Link href="#" className="text-white hover:text-gray-200">Home</Link>
            <Link href="about" className="text-white hover:text-gray-200">About</Link>
            <Link href="services" className="text-white hover:text-gray-200">Services</Link>
            <Link href="contact" className="text-white hover:text-gray-200">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
