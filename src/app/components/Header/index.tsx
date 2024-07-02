import Link from "next/link";
import { BsHandbag } from "react-icons/bs";
import { RiMenu2Fill } from "react-icons/ri";

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center px-5 h-20">
      <div className="border p-2 rounded-md">
        <RiMenu2Fill className="text-xl" />
      </div>
        <nav className="text-lg font-semibold">
          <Link href={"/"}>Savant</Link>
        </nav>
      <div className="border p-2 rounded-md">
        <BsHandbag className="text-2xl" />
      </div>
    </header>
  );
};

export default Header;
