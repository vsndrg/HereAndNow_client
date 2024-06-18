import React from 'react';
import {
    Layer,
    Popup,
    Source
} from '../../../node_modules/react-map-gl/dist/es5/exports-maplibre';

export function Marker(props: { lng: number; lat: number; imageURL: string }) {
    return (
        <Popup
            longitude={props.lng}
            latitude={props.lat}
            closeButton={false}
            closeOnClick={false}
            anchor="bottom"
        >
            {/* <h2>Popup</h2> */}
            <img src={props.imageURL} className="popup-image" />
        </Popup>
    );
}
