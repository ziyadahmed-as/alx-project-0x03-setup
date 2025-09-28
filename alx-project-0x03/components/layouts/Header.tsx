import Link from "next/link";
import Button from "../common/Button";

const Header: React.FC = () => {
  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center py-6 px-4 md:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="text-3xl md:text-5xl font-bold text-gray-800 tracking-tight"
        >
          Splash App
        </Link>

        {/* Button Group */}
        <div className="flex gap-4">
          <Button label="Sign In" color="red" size="md" />
          <Button label="Sign Up" color="blue" size="md" />
        </div>
      </div>
    </header>
  );
};

export default Header;
