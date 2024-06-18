import React from 'react';
import Maplibre from '../../../node_modules/react-map-gl/dist/es5/exports-maplibre';
import { Marker } from './Popup';

export function Map() {
    const spbCoords = {
        lng: 30.3158,
        lat: 59.9398
    };

    return (
        <Maplibre
            onClick={() => {}}
            id="map"
            initialViewState={{
                longitude: spbCoords.lng,
                latitude: spbCoords.lat,
                zoom: 18
            }}
            mapStyle="https://api.maptiler.com/maps/streets/style.json?key=tgMhLsjzo9PFbyrDjEbt"
        >
            <div className="popup-wrapper">
                <Marker
                    lng={spbCoords.lng}
                    lat={spbCoords.lat}
                    imageURL="client/assets/images/mihan.jpg"
                />
            </div>
        </Maplibre>
    );
}
