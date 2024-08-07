document.getElementById('freeturkey').addEventListener('submit', function(event) {
    event.preventDefault();

    let formData = new FormData(this);

    fetch('https://script.google.com/macros/s/AKfycbwZML4y0A6qo9aI91Vavq8bVaA9j7ByQDHaTsGvHFhzF2K-EA6UXJ1MHGkBqvyFl5WZ/exec', {
        method: 'POST',
        body: JSON.stringify({
            name: formData.get('name'),
            email: formData.get('email')
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.text())
    .then(result => {
        document.getElementById('message').innerText = 'Thank you for your support!';
        document.getElementById('freeturkey').reset(); // Optional: Reset the form after submission
        // Update signature count
        fetch('https://script.google.com/macros/s/AKfycbwZML4y0A6qo9aI91Vavq8bVaA9j7ByQDHaTsGvHFhzF2K-EA6UXJ1MHGkBqvyFl5WZ/exec')
            .then(response => response.text())
            .then(count => {
                document.getElementById('signature-count').innerText = count;
            });
    })
    .catch(error => {
        document.getElementById('message').innerText = 'Sorry, something went wrong. Please try again.';
    });
});
