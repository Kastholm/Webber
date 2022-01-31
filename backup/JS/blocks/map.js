var map = L.map("map", {
  center: [55.4863094, 9.4874486], // Default latitude and longitude on start
  zoom: 16, // Between 1 and 18; decrease to zoom out, increase to zoom in
  scrollWheelZoom: false,
});

L.tileLayer(
  "https://tile.jawg.io/eb7d41b8-623d-4dbe-baf9-33bde4e35825/{z}/{x}/{y}{r}.png?access-token=Zp3AEreXAWuPLD092YBVjWfyyd50hJuTKOyv7XASpbNLZGUzLoDoVjwMu9YrzuDX",
  {
    attribution:
      '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    provider: "Thunderforest.MobileAtlas",
    minZoom: 0,
    maxZoom: 22,
  }
).addTo(map);

/* var Jawg_Matrix = L.tileLayer(
    "https://{s}.tile.jawg.io/jawg-matrix/{z}/{x}/{y}{r}.png?access-token={accessToken}",
    {
      attribution:
        '<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      minZoom: 0,
      maxZoom: 22,
      subdomains: "abcd",
      accessToken: "<your accessToken>",
    }
  ); */

L.marker([55.4863094, 9.4874486])
  .addTo(map)
  .bindPopup("Her bor vi")
  .openPopup();

var marker = L.marker([row.Latitude, row.Longitude], {
  opacity: 1,
  // Customize your icon
  icon: L.icon({
    iconUrl: "path/to/your/icon.png",
    iconSize: [40, 60],
  }),
}).bindPopup(row.Title);
