import { useMap } from '../../node_modules/react-map-gl/dist/es5/exports-maplibre';

export default function MapImage(props: {
    imageName: string;
    imageID: string;
    imageWidth: number;
    imageHeight: number;
}) {
    const { current: map } = useMap();

    if (!map) return null;

    if (!map.hasImage(props.imageName)) {
        const image = new Image(props.imageWidth, props.imageHeight);
        image.src = props.imageName;
        image.onload = () => {
            if (!map.hasImage(props.imageID))
                map.addImage(props.imageID, image);
        };
    }

    return null;
}
