import Input from "./Input";
import SearchIcon from "./SearchIcon";

const SearchBar = () => {
  return (
    <>
      <div className="flex justify-center items-center gap-1">
        <Input />
        <SearchIcon />
      </div>
    </>
  );
};

export default SearchBar;