import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { ShoppingCart, Search } from "lucide-react";

function Header() {
  return (
    <div className="flex items-center justify-between px-4 py-2 shadow-md">
      <div className="hidden md:flex items-center -mt-2">
        <img src="/PizzifyLogo.svg" alt="Logo" height={70} width={70} />
      </div>

      <div className="flex-1 flex justify-center gap-8 md:gap-32 ml-20">
        <div className="relative">
          <Link to="/" className="group">
            Home
          </Link>
          <span className="absolute left-0 right-0 h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </div>
        <div className="relative">
          <Link to="/menu" className="group">
            Menu
          </Link>
          <span className="absolute left-0 right-0 h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </div>
        <div className="relative">
          <Link to="/contact" className="group">
            Contact Us
          </Link>
          <span className="absolute left-0 right-0 h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </div>
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded-md p-2 pl-10 h-10"
          />
          <Search className="absolute left-2" size={20} />
        </div>
        <Link to="/cart" className="ml-2 md:ml-4">
          <ShoppingCart size={24} />
        </Link>
        <Button className="hidden md:block">Sign In</Button>
      </div>

      <div className="md:hidden">
        <Button>Menu</Button>
      </div>
    </div>
  );
}

export default Header;
