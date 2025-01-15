import { useState } from 'react'
import { APIProvider, Map, MapCameraChangedEvent } from '@vis.gl/react-google-maps';
const { Place } = await google.maps.importLibrary("places");
import './App.css'


function App() {
  return (
    <APIProvider 
      apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY} 
      onLoad={() => console.log('Maps API has loaded.')}
    >
      <Map
        defaultZoom={13}
        defaultCenter={ { lat: -33.860664, lng: 151.208138 } }
        onCameraChanged={ (ev: MapCameraChangedEvent) =>
          console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom)
        }>
      </Map>
    </APIProvider>
  )
}

export default App
