import {City} from '../../types/city.ts';
import {useAppDispatch, useAppSelector} from '../../hooks/store-hooks.ts';
import React from 'react';
import {getCity} from '../../store/city-data/selectors.ts';
import {updateCity} from '../../store/city-data/city-data.ts';

type CityListProps = {
  cities: City[];
}

function CityList({cities}: CityListProps) {
  const currentCity = useAppSelector(getCity);
  const dispatch = useAppDispatch();

  function cityOnClick(city: City) {
    dispatch(updateCity(city));
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

const CityListMemo = React.memo(CityList);

export default CityListMemo;
