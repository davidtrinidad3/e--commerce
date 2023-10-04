
export function iniciarBuscador() {
    const searchInput = document.querySelector('.cabecera__busqueda');
    const products = document.querySelectorAll('.nombre__producto');

    searchInput.addEventListener('input', function () {
        const searchTerm = searchInput.value.toLowerCase();

        products.forEach(function (product) {
            const productText = product.textContent.toLowerCase();
            if (productText.includes(searchTerm)) {
                product.parentElement.style.display = 'block';
            } else {
                product.parentElement.style.display = 'none';
            }
        });
    });
}