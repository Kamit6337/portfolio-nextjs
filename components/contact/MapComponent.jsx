"use client";

import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MaptilerLayer } from "@maptiler/leaflet-maptilersdk";
import { useEffect, useRef, useState } from "react";

const MapComponent = ({ latitude, longitude }) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const center = { lng: longitude, lat: latitude };
  const [zoom] = useState(15);

  useEffect(() => {
    if (map.current) return; // stops map from intializing more than once

    map.current = new L.Map(mapContainer.current, {
      center: L.latLng(center.lat, center.lng),
      zoom: zoom,
    });

    // Create a MapTiler Layer inside Leaflet
    const mtLayer = new MaptilerLayer({
      // Get your free API key at https://cloud.maptiler.com
      apiKey: "83nMc0I1zeVluVf8INJe",
    }).addTo(map.current);
  }, [center.lng, center.lat, zoom]);

  return (
    <div className="relative w-full h-full z-0">
      <div ref={mapContainer} className="absolute w-full h-full" />
    </div>
  );
};

export default MapComponent;
