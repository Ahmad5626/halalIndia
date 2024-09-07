function includeHTML() {
    var elements = document.querySelectorAll('[data-include]');
    elements.forEach(function(element) {
        const file = element.getAttribute('data-include');
        fetch(file)
            .then(response => {
                if (response.ok) return response.text();
                throw new Error('File not found');
            })
            .then(data => element.innerHTML = data)
            .catch(error => console.log(error));
    });
}
includeHTML();