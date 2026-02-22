"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { DeliveryAgent, Vendor, Station } from "@/lib/types";

// Fix Leaflet's default icon issue in Next.js
const customIcon = new L.Icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

const agentIcon = new L.DivIcon({
    className: 'bg-transparent',
    html: `<div class="h-8 w-8 bg-orange-500 rounded-full border-2 border-white flex items-center justify-center shadow-xl shadow-orange-500/50 animate-bounce">🛵</div>`,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
});

const trainIcon = new L.DivIcon({
    className: 'bg-transparent',
    html: `<div class="h-10 w-10 bg-zinc-900 rounded-lg border-2 border-white flex items-center justify-center shadow-xl">🚆</div>`,
    iconSize: [40, 40],
    iconAnchor: [20, 20],
});

const vendorIcon = new L.DivIcon({
    className: 'bg-transparent',
    html: `<div class="h-10 w-10 bg-zinc-800 rounded-2xl border-2 border-zinc-600 flex items-center justify-center">🏪</div>`,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
});

// Component to dynamically update map view bounds
function MapUpdater({ agent, vendor, trainLat, trainLng }: { agent?: DeliveryAgent, vendor?: Vendor, trainLat?: number, trainLng?: number }) {
    const map = useMap();
    useEffect(() => {
        if (vendor && agent && trainLat && trainLng) {
            const bounds = L.latLngBounds([
                [vendor.lat, vendor.lng],
                [agent.currentLat, agent.currentLng],
                [trainLat, trainLng]
            ]);
            map.flyToBounds(bounds, { padding: [50, 50], duration: 1 });
        } else if (vendor) {
            map.setView([vendor.lat, vendor.lng], 15);
        }
    }, [agent, vendor, trainLat, trainLng, map]);
    return null;
}

export default function DeliveryMap({
    agent,
    vendor,
    trainLat,
    trainLng,
    station
}: {
    agent: DeliveryAgent | null;
    vendor: Vendor | null;
    trainLat: number;
    trainLng: number;
    station: Station;
}) {
    const centerLat = vendor?.lat || station.lat;
    const centerLng = vendor?.lng || station.lng;

    return (
        <div className="h-full w-full rounded-2xl overflow-hidden border border-white/10 relative z-0">
            <MapContainer
                center={[centerLat, centerLng]}
                zoom={14}
                scrollWheelZoom={false}
                className="h-full w-full"
                zoomControl={false}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                />

                {vendor && (
                    <Marker position={[vendor.lat, vendor.lng]} icon={vendorIcon}>
                        <Popup className="custom-popup">
                            <div className="font-bold text-zinc-900">{vendor.name}</div>
                            <div className="text-zinc-600 text-xs mt-1">Kitchen Location</div>
                        </Popup>
                    </Marker>
                )}

                {agent && (
                    <Marker position={[agent.currentLat, agent.currentLng]} icon={agentIcon}>
                        <Popup>
                            <div className="font-bold text-zinc-900">{agent.name}</div>
                            <div className="text-orange-600 font-medium text-xs mt-1">Delivery Agent • En Route</div>
                        </Popup>
                    </Marker>
                )}

                <Marker position={[trainLat, trainLng]} icon={trainIcon}>
                    <Popup>
                        <div className="font-bold text-zinc-900">Your Train</div>
                        <div className="text-zinc-600 text-xs mt-1">Live tracking...</div>
                    </Popup>
                </Marker>

                <MapUpdater agent={agent || undefined} vendor={vendor || undefined} trainLat={trainLat} trainLng={trainLng} />
            </MapContainer>

            {/* Overlay gradient for dark mode feel */}
            <div className="absolute inset-0 pointer-events-none rounded-2xl ring-1 ring-inset ring-white/10" />
        </div>
    );
}
