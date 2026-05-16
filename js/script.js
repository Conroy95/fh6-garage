document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('searchBar');
    const carCards = document.querySelectorAll('.card');

    // Proxy om de afbeelding-blokkades van externe sites te omzeilen
    const proxyUrl = "https://images.weserv.nl/?url=";

    // Loop door alle kaarten en laad de externe afbeeldingen via de proxy
    carCards.forEach(card => {
        const rawImageUrl = card.getAttribute('data-image');
        const imgTag = card.querySelector('.car-img');

        if (rawImageUrl && imgTag) {
            // We halen 'https://' van de link af voor de proxy-service
            const cleanUrl = rawImageUrl.replace(/^https?:\/\//, '');
            imgTag.src = proxyUrl + cleanUrl;
        }
    });

    // Zoekfunctie
    searchBar.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase().trim();

        carCards.forEach(card => {
            const brand = card.getAttribute('data-brand').toLowerCase();
            const model = card.getAttribute('data-model').toLowerCase();

            if (brand.includes(searchTerm) || model.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});
