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

// Load components
loadComponent('navbar', 'assets/components/navbar.html');
loadComponent('main-content', 'assets/components/main-content.html');
loadComponent('footer', 'assets/components/footer.html'); // Optional