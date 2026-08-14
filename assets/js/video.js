document.addEventListener('DOMContentLoaded', function() {
    const jenjangCheckboxes = document.querySelectorAll('.jenjang-checkbox');
    const kelasCheckboxes = document.querySelectorAll('.kelas-checkbox');
    const mapelCheckboxes = document.querySelectorAll('.mapel-checkbox');
    const productList = document.getElementById('product-list');
    const nameFilterInput = document.getElementById('name-filter');
    const nameFilterButton = document.getElementById('name-filter-button');

    const products = [
        {
            name: 'PTS Semester 1 IPA Kelas 7',
            jenjang: 'smp',
            kelas: 'tujuh',
            mapel: 'ipa',
            image: 'assets/coversoal/ipa7pts1.png',
            link: 'banksoal/PTS 1 IPA Kelas 7.html'
        },
        // Tambahkan produk lain di sini
    ];

    // Attach event listeners to checkboxes for jenjang, kelas, and mapel
    jenjangCheckboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', updateProductList);
    });

    kelasCheckboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', updateProductList);
    });

    mapelCheckboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', updateProductList);
    });

    nameFilterButton.addEventListener('click', updateProductList);

    function updateProductList() {
        const selectedJenjangs = Array.from(jenjangCheckboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value);

        const selectedKelas = Array.from(kelasCheckboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value);

        const selectedMapels = Array.from(mapelCheckboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value);

        const keyword = nameFilterInput.value.toLowerCase();

        renderProducts(selectedJenjangs, selectedKelas, selectedMapels, keyword);
    }

    function renderProducts(selectedJenjangs, selectedKelas, selectedMapels, keyword) {
        productList.innerHTML = ''; // Clear existing product cards

        products.forEach(function(product) {
            const { name, jenjang, kelas, mapel, image, link } = product;

            const jenjangMatch = selectedJenjangs.length === 0 || selectedJenjangs.includes(jenjang);
            const kelasMatch = selectedKelas.length === 0 || selectedKelas.includes(kelas);
            const mapelMatch = selectedMapels.length === 0 || selectedMapels.includes(mapel);
            const nameMatch = name.toLowerCase().includes(keyword);

            if (jenjangMatch && kelasMatch && mapelMatch && nameMatch) {
                const productCard = createProductCard(name, jenjang, kelas, mapel, image, link);
                productList.appendChild(productCard);
            }
        });
    }

    function createProductCard(name, jenjang, kelas, mapel, image, link) {
        const productCard = document.createElement('a'); // Wrap the product card in an anchor tag
        productCard.classList.add('product');
        productCard.href = link; // Set the href attribute to the product's link

        const productName = document.createElement('h3');
        productName.textContent = name;

        const productDetails = document.createElement('p');
        productDetails.textContent = `Jenjang: ${jenjang} | Kelas: ${kelas} | Mapel: ${mapel}`;

        // Create an image element and set its source and alt text
        const productImage = document.createElement('img');
        productImage.src = image;
        productImage.alt = name;

        productCard.appendChild(productImage);
        productCard.appendChild(productName);
        productCard.appendChild(productDetails); // Add product details

        return productCard;
    }

    // Initial render
    renderProducts([], [], [], '');
});