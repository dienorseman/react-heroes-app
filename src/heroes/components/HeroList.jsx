import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher";
import { HeroCard } from "./HeroCard";

export const HeroList = ( { publisher } ) => {
  const heroes = getHeroesByPublisher( publisher );

  return (
    <div
        className="row row-cols-1 row-cols-md-3 g-4 animate__animated animate__fadeIn   "
    >
      {heroes.map((hero) => (
        <HeroCard key={hero.id}   
            {...hero}
        />
      ))}
    </div>
  );
};
