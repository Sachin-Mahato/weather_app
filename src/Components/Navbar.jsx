import { Search } from "./Search";
const Navbar = () => {
  return (
    <nav className="flex justify-between bg-teal-500 py-4 px-4">
      <div className="flex items-center gap-1">
        <div className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>

        <p className="capitalize">weather</p>
      </div>
      <Search />
    </nav>
  );
};

export default Navbar;
