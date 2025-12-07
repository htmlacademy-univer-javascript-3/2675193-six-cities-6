import {useEffect, useRef} from 'react';
import {Icon, layerGroup, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {Point} from '../../types/point.ts';
import {useMap} from '../../hooks/use-map.tsx';
import {URL_MARKER_CURRENT, URL_MARKER_DEFAULT} from '../../const.ts';
import {City} from '../../types/city.ts';

type MapProps = {
  activeCity: City;
  points: Point[];
  selectedPoint: Point | undefined;
  className: string;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

export function Map({ activeCity, points, selectedPoint, className }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, activeCity);

  useEffect(() => {
    if (map) {
      map.setView([activeCity.location.latitude, activeCity.location.longitude]);
    }
  },
  [map, activeCity]);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      points.forEach((point) => {
        new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude,
        }).setIcon(
          selectedPoint !== undefined && point.id === selectedPoint.id
            ? currentCustomIcon
            : defaultCustomIcon
        ).addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, points, selectedPoint]);

  return <section className={className} ref={mapRef}></section>;
}
