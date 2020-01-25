var mymap = L.map('mapid').setView([28.65, 77.22], 4);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

var marker = L.marker([28.65, 77.22]).addTo(mymap);
marker.bindPopup("<b>Hello World!</b>").openPopup();


/*
function generate-popup() {
    // Generates the pop content with location, event name, submitted by and the image
};

function generate-markers(){
    // Generate markers for each location based on geojson data
};
*/
