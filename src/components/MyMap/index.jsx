import { Icon } from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export default function MyMap({
    cordenates,
    zoom
}) {
    const API_KEY = "pk.eyJ1Ijoic2lybHVjYXNtIiwiYSI6ImNraXFzbXIwdzBoam0yemxydTluM2FydnUifQ.QGykGf9MBJk_rwqKPGHx6g";
    return (
        <MapContainer center={cordenates} zoom={zoom} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${API_KEY}`}
                
            />
            <Marker position={[-9.656480487038857, -35.738257221931654]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    );
}