import CountryCard from "./components/CountryCard";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import SelectFilter from "./components/SelectFilter";
import countries from "../../rest-countries-api-with-color-theme-switcher-master/data.json";
import { useState, useEffect } from "react";

type Country = {
  name: string;
  flag: string;
  population: number;
  region: string;
  capital?: string;
};

function App() {
  const countriesList: Country[] = countries.map(
    ({ name, flag, population, region, capital }) => {
      return {
        name,
        flag,
        population,
        region,
        capital,
      };
    }
  );

  // const [searchTerm, setSearchTerm] = useState<string>("");
  // const [selectedRegion, setSelectedRegion] = useState<string>("");
  // const [filteredCountries, setFilteredCountries] = useState<string>();

  return (
    <div className="h-screen w-full bg-">
      {" "}
      <Header />
      <div className="bg-very-light-gray">
        {" "}
        <nav className="flex justify-between items-center px-20 py-12">
          {" "}
          <SearchInput />
          <SelectFilter />
        </nav>
        <main className=" flex flex-wrap justify-center gap-[4.5rem]">
          {countriesList.map((country) => (
            <CountryCard
              key={country.name}
              name={country.name}
              flag={country.flag}
              population={country.population}
              region={country.region}
              capital={country.capital}
            />
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
