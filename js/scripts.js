function loadComponent(id, file) {
    fetch(file)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load ${file}: ${response.statusText}`);
            }
            return response.text();
        })
        .then(data => {
            const container = document.getElementById(id);
            container.innerHTML = data;

            const scripts = container.querySelectorAll('script');
            scripts.forEach(script => {
                const newScript = document.createElement('script');
                newScript.text = script.textContent;
                document.body.appendChild(newScript); 
                script.remove(); 
            });
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
loadComponent('order', 'assets/components/OrderHeader.html');
loadComponent('order-milk', 'assets/components/OrderMilk.html');
loadComponent('contact-header', 'assets/components/ContactHeader.html');
loadComponent('get-in-touch', 'assets/components/get-in-touch.html');
loadComponent('checkout-header', 'assets/components/checkout-header.html');
loadComponent('checkout-form', 'assets/components/checkout-form.html');
