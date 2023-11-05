let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("map");

  map = new Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

initMap();

// sticky menu background
window.addEventListener('scroll', function() {
    if (window.scrolly > 150) {
        document.querySelector('#navbar').style.opacity = 0.9;
        } else {
        document.querySelector('#navbar').style.opacity = 5;
        } 
});


// Smooth scrolling
$('#navbar a, .btn').on('click', function(event) {
    if(this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                screenTop: $(hash).top -100
            },
            800
        );
    }
});



