import React from "react";
import { useTranslation } from "react-i18next";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import markerIcon from "../Body/BodyImages/mapsticker.png";

const customIcon = new L.Icon({
  iconUrl: markerIcon,
  iconSize: [38, 38],
  iconAnchor: [19, 38],
  popupAnchor: [0, -38],
});

const InteractiveMap = () => {
  const { t } = useTranslation();

  const locations = [
    {
      id: 1,
      name: t("map.silicon_valley"),
      coordinates: [37.7749, -122.4194],
      description: t("map.silicon_valley_description"),
    },
    {
      id: 2,
      name: t("map.shenzhen"),
      coordinates: [22.5431, 114.0579],
      description: t("map.shenzhen_description"),
    },
    {
      id: 3,
      name: t("map.helsinki"),
      coordinates: [60.1699, 24.9384],
      description: t("map.helsinki_description"),
    },
    {
      id: 4,
      name: t("map.warsaw"),
      coordinates: [52.2297, 21.0122],
      description: t("map.warsaw_description"),
    },
    {
      id: 5,
      name: t("map.cambridge"),
      coordinates: [52.2053, 0.1218],
      description: t("map.cambridge_description"),
    },
    {
      id: 6,
      name: t("map.reykjavik"),
      coordinates: [64.1355, -21.8954],
      description: t("map.reykjavik_description"),
    },
    {
      id: 7,
      name: t("map.tel_aviv"),
      coordinates: [32.0853, 34.7818],
      description: t("map.tel_aviv_description"),
    },
    {
      id: 8,
      name: t("map.bangalore"),
      coordinates: [12.9716, 77.5946],
      description: t("map.bangalore_description"),
    },
    {
      id: 9,
      name: t("map.toronto"),
      coordinates: [43.6511, -79.3835],
      description: t("map.toronto_description"),
    },
    {
      id: 10,
      name: t("map.svalbard"),
      coordinates: [78.2232, 15.6469],
      description: t("map.svalbard_description"),
    },
    {
      id: 11,
      name: t("map.norway"),
      coordinates: [60.472, 8.4689],
      description: t("map.norway_description"),
    },
    {
      id: 12,
      name: t("map.cape_town"),
      coordinates: [-33.9249, 18.4241],
      description: t("map.cape_town_description"),
    },
    {
      id: 13,
      name: t("map.kigali"),
      coordinates: [-1.9441, 30.0619],
      description: t("map.kigali_description"),
    },
    {
      id: 14,
      name: t("map.nairobi"),
      coordinates: [-1.2864, 36.8172],
      description: t("map.nairobi_description"),
    },
  ];

  const boundsPadding = 100;
  const worldBounds = L.latLngBounds([-90, -180], [90, 180]);
  const pixelToLatLng = boundsPadding / 256;
  const limitedBounds = L.latLngBounds(
    [
      worldBounds.getSouth() + pixelToLatLng,
      worldBounds.getWest() + pixelToLatLng,
    ],
    [
      worldBounds.getNorth() - pixelToLatLng,
      worldBounds.getEast() - pixelToLatLng,
    ]
  );

  return (
    <MapContainer
      center={[20, 0]}
      zoom={2}
      minZoom={2}
      maxZoom={10}
      className="leaflet-container"
      maxBounds={limitedBounds}
      maxBoundsViscosity={1.0}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
      />
      {locations.map(location => (
        <Marker
          key={location.id}
          position={location.coordinates}
          icon={customIcon}
        >
          <Popup>
            <h3>{location.name}</h3>
            <p>{location.description}</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default InteractiveMap;
