document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('searchBar');
    const carCards = document.querySelectorAll('.card');

    searchBar.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase().trim();

        carCards.forEach(card => {
            const brand = card.getAttribute('data-brand').toLowerCase();
            const model = card.getAttribute('data-model').toLowerCase();

            // Kijkt of de zoekterm overeenkomt met het merk of het model
            if (brand.includes(searchTerm) || model.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});