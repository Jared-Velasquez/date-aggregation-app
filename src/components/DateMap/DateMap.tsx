import { Map, MapMouseEvent} from "@vis.gl/react-google-maps"
import { useCallback } from "react";

const DateMap = () => {
  const handleMouseChange = useCallback((ev: MapMouseEvent) => {
    console.log(ev.detail.placeId);
  }, [])

  return (
    <Map
      defaultZoom={13}
      defaultCenter={ { lat: 34.07, lng: -118.44 } }
      onClick={handleMouseChange}
      id={'main'}
      >
    </Map>
  )
}

export default DateMap;