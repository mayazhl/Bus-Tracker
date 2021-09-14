const busStops = [
    [-71.093729, 42.359244],
    [-71.094915, 42.360175],
    [-71.0958, 42.360698],
    [-71.099558, 42.362953],
    [-71.103476, 42.365248],
    [-71.106067, 42.366806],
    [-71.108717, 42.368355],
    [-71.110799, 42.369192],
    [-71.113095, 42.370218],
    [-71.115476, 42.372085],
    [-71.117585, 42.373016],
    [-71.118625, 42.374863],
];

mapboxgl.accessToken = 'pk.eyJ1Ijoic2ltb24tY2FwcmlsZXMiLCJhIjoiY2tyZmQzZ2hlNXZvcTMxcWh3bTQyNHpsdCJ9.VoAYB8moSu1T9bmTI5pVQg';

let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-71.104081, 42.365554],
    zoom: 14,
});

var marker = new mapboxgl.Marker({'color': '#33CCFF'})
    .setLngLat([-71.093729, 42.359244])
    .addTo(map);

let counter = 0;

function move() {
    setTimeout(()=>{
        if (counter >= busStops.length) return;
        marker.setLngLat(busStops[counter]);
        counter++;
        move();
        update();
    }, 3000);
}

function update() {
    setMarkerColor(marker, '#66FF33');
    setTimeout(()=>{setMarkerColor(marker, '#FFFF00');},1000)
    setTimeout(()=>{setMarkerColor(marker, '#FF0000');},2000)
}

function setMarkerColor(marker, color) {
    let markerElement = marker.getElement();
    markerElement
        .querySelectorAll('svg g[fill="' + marker._color + '"]')[0]
        .setAttribute("fill", color);
    marker._color = color;
}