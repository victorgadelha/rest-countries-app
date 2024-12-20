import { Search } from "lucide-react";

// type SearchInputProps = {
//   value: string;
//   onChange: (value: string) => void;
// };

const SearchInput = (): JSX.Element => {
  return (
    <div className="relative flex items-center sm:w-full md:w-1/2 xl:w-1/3">
      <Search className="absolute left-8 text-gray-500" />

      <input
        type="text"
        placeholder="Search for a country..."
        className="w-full h-16 pl-20 border rounded-md p-2 bg-white outline-none"
      />
    </div>
  );
};

export default SearchInput;
