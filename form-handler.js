document.getElementById('freeturkey').addEventListener('submit', function(event) {
    event.preventDefault();

    let formData = new FormData(this);

    fetch('https://script.google.com/macros/s/AKfycbyMEF2SRz2FV_4oDWK1s66b4T1Hq3Px379eu57SMenv2MaJPauMkbIBKNtE2cPJatJ9/exec', {
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
        fetch('https://script.google.com/macros/s/AKfycbyMEF2SRz2FV_4oDWK1s66b4T1Hq3Px379eu57SMenv2MaJPauMkbIBKNtE2cPJatJ9/exec')
            .then(response => response.text())
            .then(count => {
                document.getElementById('signature-count').innerText = count;
            });
    })
    .catch(error => {
        document.getElementById('message').innerText = 'Sorry, something went wrong. Please try again.';
    });
});
