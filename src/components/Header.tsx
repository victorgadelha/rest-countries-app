import { Moon } from "lucide-react";
const Header = () => {
  return (
    <header className="flex justify-between items-center py-8 px-16 border-b border-dark-gray">
      <h1 className="font-extrabold font-sans text-2xl">Where in the world?</h1>

      <span className="flex items-center gap-2 font-semibold cursor-pointer">
        <Moon />
        Dark Mode
      </span>
    </header>
  );
};

export default Header;
