const SelectFilter = (): JSX.Element => {
  return (
    <select
      id="filter"
      className="border rounded-md p-2 h-16 W-[12%] outline-none bg-white"
    >
      <option value="">Filter by Region</option>
      <option value="america">America</option>
      <option value="europe">Europe</option>
      <option value="asia">Asia</option>
      <option value="africa">Africa</option>
      <option value="oceania">Oceania</option>
    </select>
  );
};

export default SelectFilter;
