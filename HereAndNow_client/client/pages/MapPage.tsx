import React from 'react';
import { Map } from '../components/map/Map';

export function MapPage(props: { imageURL: string }) {
    return (
        <div className="map-wrapper">
            <Map imageURL={props.imageURL} />
        </div>
    );
}
