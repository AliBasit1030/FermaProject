function loadComponent(id, file) {
    fetch(file)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load ${file}: ${response.statusText}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(error => {
            console.error(error);
            document.getElementById(id).innerHTML = `<p>Error loading component: ${file}</p>`;
        });
}

loadComponent('navbar', 'assets/components/navbar.html');
loadComponent('main-content', 'assets/components/main-content.html');
loadComponent('footer', 'assets/components/footer.html'); 
loadComponent('carousel', 'assets/components/headerCarousel.html');
loadComponent('carouselsec', 'assets/components/CarosalComment.html');
loadComponent('product-header', 'assets/components/ProductHeader.html');
loadComponent('Product-features', 'assets/components/Products-features.html');
loadComponent('faq', 'assets/components/faq-header.html');
loadComponent('faqs', 'assets/components/faqs.html');
