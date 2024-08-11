import { Marker } from '@react-google-maps/api';

const GoogleMapMarker = ({
    position,
    index,
    markerType,
    scrollTo = ()=>{},
}: {
    position: { lat: number; lng: number };
    index: number;
    markerType: string;
    scrollTo: (index: number, position: { lat: number; lng: number }) => void;
}) => {
    const svgIcon = {
        url: `/icons/${markerType}Pin.svg`,
    };
    const handleClick = () => {
        scrollTo(index, position);
    };
    return <Marker position={position} onClick={handleClick} icon={svgIcon} />;
};
export default GoogleMapMarker;
