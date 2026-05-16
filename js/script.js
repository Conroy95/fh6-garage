document.addEventListener('DOMContentLoaded', () => {
    const garageGrid = document.getElementById('garageGrid');
    const searchBar = document.getElementById('searchBar');
    const proxyUrl = "https://images.weserv.nl/?url=";
    let allCars = [];

    // Laad de auto's in uit het losse JSON-bestand
    fetch('autos.json')
        .then(response => response.json())
        .then(data => {
            allCars = data;
            renderCars(allCars);
        })
        .catch(error => console.error('Fout bij laden auto-data:', error));

    // Functie om de HTML-kaarten te bouwen
    function renderCars(carsToRender) {
        garageGrid.innerHTML = ''; // Maak het grid leeg

        carsToRender.forEach(car => {
            const card = document.createElement('div');
            card.classList.add('card');
            
            // Schoon de afbeeldingslink op voor de proxy
            const cleanUrl = car.image.replace(/^https?:\/\//, '');
            const proxyImage = proxyUrl + cleanUrl;

            card.innerHTML = `
                <div class="card-image-wrapper">
                    <img class="car-img" src="${proxyImage}" alt="${car.brand} ${car.model}">
                </div>
                <div class="card-content">
                    <div class="brand">${car.brand}</div>
                    <div class="model">${car.model}</div>
                    <div class="stats">
                        <span class="class">${car.class}</span>
                        <span class="year">${car.year}</span>
                    </div>
                </div>
            `;
            garageGrid.appendChild(card);
        });
    }

    // Live zoekfunctie
    searchBar.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase().trim();
        
        const filteredCars = allCars.filter(car => 
            car.brand.toLowerCase().includes(searchTerm) || 
            car.model.toLowerCase().includes(searchTerm)
        );
        
        renderCars(filteredCars);
    });
});
