import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function Map() {
  useEffect(() => {
    const map = L.map("map").setView([20, 100], 3); // Centered globally

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    const locations = [
      { name: "United States", coords: [37.0902, -95.7129] },
      { name: "Canada", coords: [56.1304, -106.3468] },
      { name: "India", coords: [20.5937, 78.9629] },
      { name: "Philippines", coords: [12.8797, 121.7740] },
      { name: "Japan", coords: [36.2048, 138.2529] },
      { name: "Malaysia", coords: [4.2105, 101.9758] },
      { name: "Indonesia", coords: [-0.7893, 113.9213] },
    ];

    locations.forEach((loc) => {
      L.marker(loc.coords, {
        icon: L.icon({
          iconUrl: "https://cdn-icons-png.flaticon.com/128/684/684908.png", // Custom marker
          iconSize: [40, 40],
        }),
      })
        .addTo(map)
        .bindPopup(`<b>${loc.name}</b>`);
    });

    return () => map.remove();
  }, []);

  return <div id="map" className="w-full h-[500px] rounded-2xl shadow-lg" />;
}