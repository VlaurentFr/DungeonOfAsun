import L from "leaflet";

// CAPITAL MARKER
const capitalColor = '#DC5A41'

const markerCapitalStyles = `
  background-color: ${capitalColor};
  width: 24px;
  height: 24px;
  display: block;
  left: -12px;
  top: -12px;
  position: relative;
  border-radius: 24px 24px 0;
  transform: rotate(45deg);
  border: 1px solid #FFFFFF`

export const iconCapital = L.divIcon({
  className: "my-custom-pin",
  iconAnchor: [0, 24],
  labelAnchor: [-6, 0],
  popupAnchor: [0, -36],
  html: `<span style="${markerCapitalStyles}" />`
})

// CITY MARKER
const cityColor = '#F6BE4F'

const markerCityStyles = `
  background-color: ${cityColor};
  width: 24px;
  height: 24px;
  display: block;
  left: -12px;
  top: -12px;
  position: relative;
  border-radius: 24px 24px 0;
  transform: rotate(45deg);
  border: 1px solid #FFFFFF`

export const iconCity = L.divIcon({
  className: "my-custom-pin",
  iconAnchor: [0, 24],
  labelAnchor: [-6, 0],
  popupAnchor: [0, -36],
  html: `<span style="${markerCityStyles}" />`
})

// STATE CITY MARKER
const stateColor = '#2C3545'

const markerStateStyles = `
  background-color: ${stateColor};
  width: 24px;
  height: 24px;
  display: block;
  left: -12px;
  top: -12px;
  position: relative;
  border-radius: 24px 24px 0;
  transform: rotate(45deg);
  border: 1px solid #FFFFFF`

export const iconState = L.divIcon({
  className: "my-custom-pin",
  iconAnchor: [0, 24],
  labelAnchor: [-6, 0],
  popupAnchor: [0, -36],
  html: `<span style="${markerStateStyles}" />`
})