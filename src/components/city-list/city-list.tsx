import {City} from '../../types/city.ts';
import {updateCity} from '../../store/actions.ts';
import {useAppDispatch, useAppSelector} from '../../hooks/store-hooks.ts';

type CityListProps = {
  cities: City[];
}

export default function CityList({cities}: CityListProps) {
  const currentCity = useAppSelector((state) => state.city);
  const dispatch = useAppDispatch();

  function cityOnClick(city: City) {
    dispatch(updateCity({city}));
  }

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => (
            <li key={city.name} className="locations__item">
              <a
                className={`locations__item-link tabs__item ${city.name === currentCity.name ? 'tabs__item--active' : ''}`}
                href="#"
                onClick={() => cityOnClick(city)}
              >
                <span>{city.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
