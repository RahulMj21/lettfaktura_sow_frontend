import { Search } from "lucide-react";

const SearchInput = ({ placeholder }) => {
  return (
    <div className="search-input">
      <input type="text" placeholder={placeholder} />
      <Search className="search-icon" />
    </div>
  );
};

export default SearchInput;
