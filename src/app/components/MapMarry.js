"use client";

import React, { useCallback, useState } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "50%",
  height: "400px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

export const MapMarry = () => {
  const [map, setMap] = useState(null);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAOVYRIgupAurZup5y1PRh8Ismb1A3lLao",
  });

  const onLoad = useCallback((map) => {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = useCallback((map) => {
    setMap(null);
  }, []);

  console.log(isLoaded);

  return (
    <div className="h-full lg:w-full">
      <div className="text-center">
        <h1 className="font-dancingScript text-5xl mb-6 font-bold">
          ¿Dónde nos casaremos?
        </h1>
      </div>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onLoad={onLoad}
          onUnmount={onUnmount}
        ></GoogleMap>
      ) : (
        <></>
      )}
    </div>
  );
};
