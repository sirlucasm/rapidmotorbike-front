import 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { CircularProgress } from '@material-ui/core';
import UserService from '../../services/UserService';
import { Link } from 'react-router-dom';

import './style.css';

export default function MyMap({
    coordinates: coords,
    zoom,
    locale: local
}) {
    const API_KEY = "pk.eyJ1Ijoic2lybHVjYXNtIiwiYSI6ImNraXFzbXIwdzBoam0yemxydTluM2FydnUifQ.QGykGf9MBJk_rwqKPGHx6g";
    const coordinates = coords ? coords : UserService.getCurrentCoordinates();
    const locale = local ? local : UserService.getCurrentLocale();
    
    return (
        coordinates ?
        <MapContainer center={coordinates} zoom={zoom} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${API_KEY}`}
                
            />
            {
                coordinates.length > 0 ?
                <Marker position={coordinates}>
                    <Popup>
                        <div>
                            <h3>{locale}</h3>
                        </div>
                        <div>
                            <Link
                                className="my-map-start-travel"
                                to={{
                                    pathname: "/app/start-travel",
                                    state: {
                                        locale,
                                        coordinates
                                    }
                                }}
                            >
                                Iniciar viagem
                            </Link>
                        </div>
                    </Popup>
                </Marker>
                : null
            }
        </MapContainer>
        :
        <CircularProgress />
    );
}