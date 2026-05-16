document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('searchBar');
    const carCards = document.querySelectorAll('.card');

    // Proxy om hotlink-blokkades van Fandom te omzeilen
    const proxyUrl = "https://images.weserv.nl/?url=";

    // Laad alle afbeeldingen live in via de proxy
    carCards.forEach(card => {
        const rawImageUrl = card.getAttribute('data-image');
        const imgTag = card.querySelector('.car-img');

        if (rawImageUrl && imgTag) {
            const cleanUrl = rawImageUrl.replace(/^https?:\/\//, '');
            imgTag.src = proxyUrl + cleanUrl;
        }
    });

    // Live zoekfunctie
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
