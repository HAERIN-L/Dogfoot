function updateSpeed() {
    fetch('/get_signal')
        .then(response => response.json())
        .then(data => {
            let speed = Math.max(1, 10 - data.strength / 10);
            document.getElementById('character').style.animationDuration = `${speed}s`;
        })
        .catch(error => console.error('Error fetching signal strength:', error));
}


setInterval(updateSpeed, 2000);
