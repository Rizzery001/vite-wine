"use client";

import {
  APIProvider,
  Map,
  Marker,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import { useState } from "react";
import { producers, type Producer } from "@/lib/producers";

const paperMapStyle = [
  { elementType: "geometry", stylers: [{ color: "#EDE4D3" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#5B4A3D" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#F2EBDF" }] },
  {
    featureType: "administrative.country",
    elementType: "geometry.stroke",
    stylers: [{ color: "#7A2330" }, { weight: 0.6 }],
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [{ color: "#1A1411" }],
  },
  {
    featureType: "landscape.natural",
    elementType: "geometry",
    stylers: [{ color: "#E8DEC9" }],
  },
  { featureType: "poi", stylers: [{ visibility: "off" }] },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [{ color: "#D9D4B6" }, { visibility: "on" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#E0D5BE" }],
  },
  { featureType: "road", elementType: "labels", stylers: [{ visibility: "off" }] },
  { featureType: "transit", stylers: [{ visibility: "off" }] },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#C9D6CC" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#5C6B4A" }],
  },
];

const markerIcon =
  "data:image/svg+xml;charset=UTF-8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#F2EBDF" opacity="0.9"/><circle cx="12" cy="12" r="6" fill="#7A2330"/><circle cx="12" cy="12" r="6" fill="none" stroke="#1A1411" stroke-width="0.6"/></svg>`
  );

export default function MapSection() {
  const [active, setActive] = useState<Producer | null>(null);
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const mapId = process.env.NEXT_PUBLIC_GOOGLE_MAPS_ID;

  return (
    <section id="map" className="relative px-6 md:px-10 py-24 md:py-40">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 mb-12 md:mb-16">
          <div className="md:col-span-3">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-smoke">
              § Cartography
            </div>
          </div>
          <div className="md:col-span-9">
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1] tracking-tightest">
              From the Rhône to{" "}
              <span className="italic font-light">the Rhine</span>.
            </h2>
            <p className="mt-6 text-ink/75 max-w-2xl leading-relaxed">
              A small country with an outsized variety of soils, altitudes
              and grapes. Click a marker to read about the grower.
            </p>
          </div>
        </div>

        <div className="relative aspect-[16/10] md:aspect-[16/9] w-full border border-ink/20 overflow-hidden bg-paper">
          {apiKey ? (
            <APIProvider apiKey={apiKey}>
              <Map
                defaultCenter={{ lat: 46.7, lng: 8.0 }}
                defaultZoom={7.5}
                mapId={mapId || undefined}
                styles={mapId ? undefined : paperMapStyle}
                gestureHandling="cooperative"
                disableDefaultUI
                className="map-container w-full h-full"
              >
                {producers.map((p) => (
                  <Marker
                    key={p.id}
                    position={{ lat: p.lat, lng: p.lng }}
                    onClick={() => setActive(p)}
                    title={p.name}
                    icon={{
                      url: markerIcon,
                      scaledSize: { width: 22, height: 22 } as google.maps.Size,
                      anchor: { x: 11, y: 11 } as google.maps.Point,
                    }}
                  />
                ))}

                {active && (
                  <InfoWindow
                    position={{ lat: active.lat, lng: active.lng }}
                    onCloseClick={() => setActive(null)}
                    pixelOffset={[0, -16]}
                  >
                    <div className="p-1 max-w-[260px] font-sans">
                      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#7A2330] mb-1">
                        {active.region} — {active.canton}
                      </div>
                      <div className="font-serif text-xl mb-1 text-[#1A1411]">
                        {active.name}
                      </div>
                      <div className="text-xs text-[#5B4A3D] leading-snug">
                        {active.blurb}
                      </div>
                    </div>
                  </InfoWindow>
                )}
              </Map>
            </APIProvider>
          ) : (
            <MapPlaceholder />
          )}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-[10px] uppercase tracking-[0.22em] text-smoke">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-ember rounded-full" />
            <span>Producer</span>
          </div>
          <div>6 estates · 5 cantons · 38ha total</div>
        </div>
      </div>
    </section>
  );
}

function MapPlaceholder() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-paper p-8">
      <div className="text-center max-w-md">
        <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-smoke mb-3">
          Map preview
        </div>
        <div className="font-display text-2xl mb-3">
          Add your Google Maps API key to{" "}
          <span className="italic">.env.local</span>
        </div>
        <div className="text-sm text-ink/70 leading-relaxed">
          Set{" "}
          <code className="font-mono text-xs bg-ink/10 px-1.5 py-0.5">
            NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
          </code>{" "}
          and the map will render with all six producers as markers.
        </div>
      </div>
    </div>
  );
}
