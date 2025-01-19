import { APIProvider, useApiIsLoaded, useMap, useMapsLibrary } from '@vis.gl/react-google-maps';
import './App.css'
import { useEffect } from 'react';
import DateMap from './components/DateMap/DateMap';

// Places API Fields Pricing:

// IDs Only: attributions, id, name*, photos

// Location Only: addressComponents, adrFormatAddress, formattedAddress, location, 
// plusCode, shortFormattedAddress, types, viewport

// Basic: accessibilityOptions, businessStatus, containingPlaces, displayName, 
// googleMapsLinks*, googleMapsUri, iconBackgroundColor, iconMaskBaseUri, 
// primaryType, primaryTypeDisplayName, pureServiceAreaBusiness, subDestinations, 
// utcOffsetMinutes

// Advanced: currentOpeningHours, currentSecondaryOpeningHours, internationalPhoneNumber, 
// nationalPhoneNumber, priceLevel, priceRange, rating, regularOpeningHours, 
// regularSecondaryOpeningHours, userRatingCount, websiteUri

// Preferred: allowsDogs, curbsidePickup, delivery, dineIn, editorialSummary, evChargeOptions, 
// fuelOptions, goodForChildren, goodForGroups, goodForWatchingSports, liveMusic, 
// menuForChildren, parkingOptions, paymentOptions, outdoorSeating, reservable, 
// restroom, reviews, routingSummaries,* servesBeer, servesBreakfast, servesBrunch, 
// servesCocktails, servesCoffee, servesDessert, servesDinner, servesLunch, 
// servesVegetarianFood, servesWine, takeout

// What fields should this app track?
// displayName, 

const MyComponent = () => {
  const apiIsLoaded = useApiIsLoaded();
  const map = useMap('main');
  const placesLib = useMapsLibrary('places');

  useEffect(() => {
    if (!apiIsLoaded || !map || !placesLib) return;
    
    console.log('MyComponent useEffect');

    const placesService = new placesLib.PlacesService(map);

    const test_request = {
      fields: ['displayName', 'location'],
      location: new window.google.maps.LatLng(34.07, -118.44),
      radius: 500,
      includedPrimaryTypes: ['restaurant'],
      maxResultCount: 10,
      rankPreference: window.google.maps.places.SearchNearbyRankPreference.POPULARITY,
      language: 'en-US',
      region: 'us',
    }
    
    console.log("Performing nearby search");
    
    placesService.nearbySearch(test_request, (result) => {
      console.log(result);
    });

    console.log("Performed nearby search");
  }, [apiIsLoaded, map, placesLib]);

  return (
    <div>Hi</div>
  )
}

const App = () => {
  return (
    <APIProvider 
      apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY} 
      onLoad={() => console.log('Maps API has loaded.')}
    >
      <DateMap />
      <MyComponent />
    </APIProvider>
  )
}

export default App
