var info = 'init';
var cnt = 0;
function printResult( s) {
  document.getElementById('position').textContent = info + ' ' + ++cnt;  
}
function geosuccess(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;  
  info = `Lat: ${lat} Lng: ${lng}`;
  printResult( info);
}
function geofail(){
  info = 'fail';
  printResult(info);
}
function doGeo(){
  printResult("starting");
 if (navigator.geolocation) {
   navigator.geolocation.getCurrentPosition(geosuccess, geofail); 
 }  
}
function startGeo(){
  printResult('starting warch');
  navigator.geolocation.watchPosition(geosuccess, geofail, { enableHighAccuracy: true})
}

