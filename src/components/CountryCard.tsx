type CountryCardProps = {
  flag: string;
  name: string;
  population: number;
  region: string;
  capital?: string;
};

const CountryCard = ({
  flag,
  name,
  population,
  region,
  capital,
}: CountryCardProps) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 rounded-md bg-white shadow-md">
      <img
        className="rounded-t-md w-full h-52 object-cover"
        src={flag}
        alt={name}
      />
      <div className="p-8">
        <h1 className="font-extrabold text-lg sm:text-xl mb-2">{name}</h1>
        <p>
          <span className="font-semibold">Population:</span> {population}
        </p>
        <p>
          <span className="font-semibold">Region:</span> {region}
        </p>
        {capital && (
          <p>
            <span className="font-semibold">Capital:</span> {capital}
          </p>
        )}
      </div>
    </div>
  );
};

export default CountryCard;
