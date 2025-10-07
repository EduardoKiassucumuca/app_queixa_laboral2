import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix para os ícones - ESSENCIAL
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});
function MapCenterUpdater({ center }) {
  const map = React.useMap();
  
  React.useEffect(() => {
    if (center && center.length === 2) {
      map.setView(center, map.getZoom());
    }
  }, [center, map]);
  
  return null;
}
const SimpleMap = ({ position = [] }) => {
    const [address, setAddress] = React.useState('A carregar endereço...');
    const [loading, setLoading] = React.useState(true);

     const safePosition = position && 
                       Array.isArray(position) && 
                       position.length === 2 &&
                       !isNaN(position[0]) && 
                       !isNaN(position[1]) 
    ? [parseFloat(position[0]), parseFloat(position[1])]
    : [-8.888, 13.2343];

  const reverseGeocode = async (lat, lng) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1&accept-language=pt`
      );
      
      const data = await response.json();
      
      if (data && data.display_name) {
        setAddress(data.display_name);
      } else {
        setAddress('Endereço não disponível');
      }
    } catch (error) {
      console.error('Erro no reverse geocoding:', error);
      setAddress('Erro ao carregar endereço');
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    reverseGeocode(safePosition[0], safePosition[1]);
  }, [safePosition]);
  return (
    <div style={{ height: '400px', width: '100%', borderRadius: '8px', overflow: 'hidden' }}>
      <MapContainer 
        center={safePosition} 
        zoom={13} 
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
         <Marker position={safePosition}>
          <Popup>
              <div style={{ marginBottom: '12px' }}>
                <div style={{ fontWeight: 'bold', color: '#333', fontSize: '14px' }}>
                  📍 Endereço:
                </div>
                <div style={{ fontSize: '12px', color: '#666', marginTop: '4px', lineHeight: '1.4' }}>
                  {loading ? 'A carregar endereço...' : address}
                </div>
              </div>
              
              <div style={{ backgroundColor: '#f8f9fa', padding: '8px', borderRadius: '4px', border: '1px solid #dee2e6' }}>
                <div style={{ fontWeight: 'bold', color: '#333', fontSize: '12px' }}>
                  🎯 Coordenadas GPS:
                </div>
                <div style={{ fontSize: '11px', color: '#495057', fontFamily: 'monospace', marginTop: '2px' }}>
                  Latitude: {safePosition[0].toFixed(6)}
                  <br />
                  Longitude: {safePosition[1].toFixed(6)}
                </div>
              </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default SimpleMap;