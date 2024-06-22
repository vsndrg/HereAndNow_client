import React, { useState } from 'react';
import Maplibre from '../../../node_modules/react-map-gl/dist/es5/exports-maplibre';
import { Marker } from './Popup';
// import Draggable from 'react-draggable';

export function Map(props: { imageURL: string }) {
    const spbCoords = {
        lng: 30.3158,
        lat: 59.9398
    };

    // const [viewport, setViewport] = useState({
    //     longitude: spbCoords.lng,
    //     latitude: spbCoords.lat,
    //     zoom: 18
    // });

    // const handleZoom = (factor: number) => {
    //     const newZoom = Math.min(Math.max(viewport.zoom * factor, 1), 20);
    //     setViewport({
    //         ...viewport,
    //         zoom: newZoom
    //     });
    //     console.log(viewport.zoom);
    // };

    // const rightEdgeBounds = {
    //     left: window.innerWidth + 100,
    //     top: 0,
    //     right: window.innerWidth + 50,
    //     bottom: window.innerHeight
    // };

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
                    imageURL={props.imageURL}
                />
            </div>

            {/* <Draggable
                axis="y"
                bounds={rightEdgeBounds}
                onDrag={(e, { deltaY }) => {
                    if (deltaY < 0) {
                        handleZoom(1.01);
                    } else if (deltaY > 0) {
                        handleZoom(0.99);
                    }
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        right: 10,
                        top: 10,
                        cursor: 'grab',
                        fontSize: '30px'
                    }}
                >
                    Swipe up/down to zoom
                </div>
            </Draggable> */}
        </Maplibre>
    );
}
