var info = 'init';
function geosuccess(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;  
  info = `Lat: ${lat} Lng: ${lng}`;
  document.getElementById('result').textContent = info;  
}
function geofail(){
  info = 'fail';
}
function doGeo(){
 if (navigator.geolocation) {
   navigator.geolocation.getCurrentPosition(geosuccess, geofail); 
 }  
}

