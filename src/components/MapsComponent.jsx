import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import React from 'react';
import '../App.css';

const containerStyle = {
    width: '100%',
    height: '100%',
    zIndex: 5,
};

const center = {
    lat: -26.2825128,
    lng: -48.8335742,
};

const options = {
    streetViewControl: false,
    mapTypeControl: false,
    fullscreenControl: false,
};

const MapsComponent = () => {
    const apiKey = process.env.REACT_APP_API_KEY || '';

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: apiKey
    });

    if (!isLoaded) {
        return <div style={{ textAlign: 'center' }}>Carregando mapa...</div>;
    }

    return (
        <div className="mapContainer">
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={16} // mais próximo para foco no local
                options={options}
            >
                {/* Marcador no endereço desejado */}
                <Marker
                    position={center}
                    animation={window.google.maps.Animation.DROP}
                    title="Paróquia São Francisco de Assis"
                />
            </GoogleMap>
        </div>
    );
}

export default MapsComponent;
