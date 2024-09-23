import { Button } from "@/components/ui/button";

import { Link, useLocation } from "@tanstack/react-router";
const NavItems = [
  { name: "About", page: "/about" },
  { name: "Portfolio", page: "/portfolio" },
  { name: "Blog", page: "/blog" },
  { name: "Contact", page: "/contact" },
];

// Todo:
// Break Mobile nav layout and Desktop later

const Navbar = () => {
  const location = useLocation();
  const url = location.pathname;

  return (
    <nav className="sticky top-0 bg-neutral-800 text-neutral-100">
      <div className="container mx-auto py-4 max-w-6xl">
        <div className="flex items-center justify-between">
          <div>
            <Link to="/">
              <h3 className="text-lg font-bold">Jeff</h3>
            </Link>
          </div>
          <div className="flex items-center justify-center gap-8">
            {NavItems.map((item, i) => {
              return (
                <Link
                  to={item.page}
                  key={i}
                  className={`text-lg font-bold ${url === item.page ? "text-neutral-100" : "text-neutral-100/40 hover:text-neutral-100"}`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
          <div>
            <Button className="p-5 bg-sky-500 text-neutral-50 text-xl font-bold hover:bg-sky-700">
              Hire
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
