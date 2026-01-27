import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-foreground/5">
      <div className="px-5 md:px-20 py-4 md:py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="font-sans text-xl md:text-2xl font-black uppercase tracking-tight">
            ABHISHEK
          </Link>

          {/* Nav Link */}
          <a
            href="#projects"
            className="text-sm font-bold uppercase tracking-wide hover:opacity-70 transition-opacity"
          >
            Projects
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
