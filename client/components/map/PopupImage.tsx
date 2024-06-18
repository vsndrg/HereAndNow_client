// import React from 'react';
// import MapImage from '../../utils/MapImage';
// import {
//     Layer,
//     Source
// } from '../../../node_modules/react-map-gl/dist/es5/exports-maplibre';
// import type { FeatureCollection } from 'geojson';

// export function PopupImage(props: {lng:}) {
//     const iamgeData: FeatureCollection = {
//         type: 'FeatureCollection',
//         features: [
//             {
//                 type: 'Feature',
//                 properties: {},
//                 geometry: {
//                     type: 'Point',
//                     coordinates: [clickCoords.lng, clickCoords.lat]
//                 }
//             }
//         ]
//     };

//     return (
//         <div className="popup-image">
//             <MapImage
//                 imageName="bin/images/pointer.png"
//                 imageID="pointer"
//                 imageWidth={80}
//                 imageHeight={80}
//             ></MapImage>
//             <Source id="pointer-source" type="geojson" data={pointerData}>
//                 <Layer
//                     id="pointer-layer"
//                     type="symbol"
//                     source="pointer-source"
//                     layout={{
//                         'icon-image': 'pointer',
//                         'icon-size': 1,
//                         'icon-anchor': 'bottom'
//                     }}
//                 />
//             </Source>
//         </div>
//     );
// }
