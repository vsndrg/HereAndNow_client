import React from 'react';
import { Map } from '../components/map/Map';
import { Marker } from '../components/map/Popup';

export function MapPage() {
    return (
        <div className="map-wrapper">
            <Map />
        </div>
    );
}
