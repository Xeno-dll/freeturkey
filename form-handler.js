document.getElementById('petition-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let formData = new FormData(this);

    fetch('https://your-backend-service-url', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(result => {
        document.getElementById('message').innerText = 'Thank you for signing!';
    })
    .catch(error => {
        document.getElementById('message').innerText = 'There was an error. Please try again.';
    });
});
