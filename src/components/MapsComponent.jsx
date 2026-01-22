import React from 'react';
import '../App.css';

const MapsComponent = () => {
    return (
        <div className="mapContainer">
            <iframe
                title="Mapa - Paróquia São Francisco de Assis"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-48.840%2C-26.286%2C-48.827%2C-26.279&layer=mapnik&marker=-26.2825128%2C-48.8335742"
                style={{
                    border: 0,
                    width: '100%',
                    height: '100%',
                }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
        </div>
        
    );
};

export default MapsComponent;
