// react
import React from "react";

// style
import "./index.css";

import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "800px",
  height: "600px",
};

const routes = [
  {
    id: 1,
    name: "Brisbane to Tamborine Mountain",
    lat: -27.6981793,
    lng: 152.7909005,
  },
  {
    id: 2,
    name: "Gold Coast to Tamborine Mountain",
    lat: -27.9462677,
    lng: 153.2097129,
  },
];

function App() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  const [map, setMap] = React.useState({ lat: -27.6981793, lng: 152.7909005 });

  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col p-4">
        <h1 className="text-2xl font-bold mb-4">Hop on Hop off - Simulation</h1>
        <ul className="space-y-2">
          {routes.map((route) => (
            <li
              key={route.id}
              className="text-gray-500 border border-2 p-2 rounded border-gray-400 cursor-pointer hover:border-blue-500 hover:text-white hover:bg-blue-500"
              onClick={() => setMap({ lat: route.lat, lng: route.lng })}
            >
              {route.name}
            </li>
          ))}
        </ul>
      </div>
      <div>
        {isLoaded && (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={map}
            zoom={10}
          >
            {/* Child components, such as markers, info windows, etc. */}
            <></>
          </GoogleMap>
        )}
      </div>
    </div>
  );
}

export default App;
