"use client";
import React, { useEffect } from "react";

import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { Feature } from "ol";
import { Point } from "ol/geom";
import { Vector as VectorLayer } from "ol/layer";
import { Vector as VectorSource } from "ol/source";
import { Icon, Style } from "ol/style";
import { fromLonLat } from "ol/proj";

import "ol/ol.css";
import Image from "next/image";

const centerCoordinates = [-76.93286614462212, -12.174316885844146];
const markerCoordinates = [-76.93286614462212, -12.174316885844146];

const MapMarry2 = () => {
  useEffect(() => {
    const centerCoordinates3857 = fromLonLat(centerCoordinates);
    const markerCoordinates3857 = fromLonLat(markerCoordinates);

    const map = new Map({
      target: "map",
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        new VectorLayer({
          source: new VectorSource({
            features: [
              new Feature({
                geometry: new Point(markerCoordinates3857),
              }),
            ],
          }),
          style: new Style({
            image: new Icon({
              src: "/images/ubi.webp",
              height: 40,
              color: "#fff",
            }),
          }),
        }),
      ],
      view: new View({
        center: centerCoordinates3857, // Coordenadas iniciales en EPSG:3857 (proyección web mercator)
        zoom: 17.5, // Nivel de zoom inicial
      }),
    });

    return () => {
      map.setTarget(null);
    };
  }, []);

  return (
    <div className="h-full lg:w-full lg:py-14 pt-5">
      <div className="text-center">
        <h1 className="font-dancingScript lg:text-5xl text-4xl lg:mb-6 mb-3 font-extrabold">
          ¿Dónde nos casaremos?
        </h1>
      </div>
      <div className="w-full h-[80%] flex lg:flex-row flex-col lg:mt-5 mt-3">
        <div
          className="flex flex-col items-center lg:justify-center lg:w-[50%]
        font-nametitle italic text-base font-semibold"
        >
          <h1 className="text-2xl ">Iglesia</h1>
          <h1 className="text-[#645d34]">"Nuestra Señora de la Esperanza"</h1>
          <div className="rounded-xl overflow-hidden object-cover mt-3">
            <Image
              src={"/images/parroquia.webp"}
              width={500}
              height={400}
              alt="parroquia-image"
            ></Image>
          </div>
        </div>

        <div
          className="flex flex-col items-center lg:justify-center lg:w-[50%] h-full justify-center
        lg:mt-0 mt-5 font-nametitle italic text-base font-semibold"
        >
          <div className="text-center">
            <h1 className="text-2xl">Dirección</h1>
            <h1 className="text-[#645d34]">
              Av. 26 de Noviembre, Paradero 4, Nueva Esperanza, VMT.
            </h1>
          </div>
          <div
            id="map"
            className="lg:h-[380px] lg:w-[75%] w-[100%] h-[250px] mt-3 rounded-xl overflow-hidden lg:mb-0"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default MapMarry2;
