document.addEventListener("DOMContentLoaded", function() {
    const productArray = [
        { id: 'product1', name: 'Product 1' },
        { id: 'product2', name: 'Product 2' },
        { id: 'product3', name: 'Product 3' }
    ];

    const productSelect = document.getElementById("productName");
    productArray.forEach(product => {
        const option = document.createElement("option");
        option.value = product.name;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });

    if (localStorage.getItem("reviewCount") === null) {
        localStorage.setItem("reviewCount", "0");
    }

    document.getElementById("reviewForm").addEventListener("submit", function() {
        let reviewCount = parseInt(localStorage.getItem("reviewCount"));
        localStorage.setItem("reviewCount", (reviewCount + 1).toString());
    });

    const stars = document.querySelectorAll('.star');
    stars.forEach((star, index) => {
        star.addEventListener('click', () => {
            stars.forEach((s, i) => {
                if (i <= index) {
                    s.classList.add('selected');
                } else {
                    s.classList.remove('selected');
                }
            });
        });

        star.addEventListener('mouseover', () => {
            stars.forEach((s, i) => {
                if (i <= index) {
                    s.classList.add('hover');
                } else {
                    s.classList.remove('hover');
                }
            });
        });

        star.addEventListener('mouseout', () => {
            stars.forEach((s) => {
                s.classList.remove('hover');
            });
        });
    });

    const today = new Date();
    document.getElementById('currentyear').textContent = today.getFullYear();
    document.getElementById('lastModified').textContent = `Last Modification: ${document.lastModified}`;
});
