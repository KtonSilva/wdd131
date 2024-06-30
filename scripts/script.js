document.addEventListener('DOMContentLoaded', () => {
    const yearElement = document.getElementById('year');
    const lastModifiedElement = document.getElementById('lastModified');
    const windchillElement = document.getElementById('windchill');

    yearElement.textContent = new Date().getFullYear();
    
    // Set last modified date directly
    lastModifiedElement.textContent = new Date(document.lastModified).toLocaleString();

    const temperature = 10; // static temperature in °C
    const windSpeed = 5; // static wind speed in km/h

    function calculateWindChill(temp, wind) {
        if (temp <= 10 && wind > 4.8) {
            return (13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(1) + ' °C';
        } else {
            return 'N/A';
        }
    }

    windchillElement.textContent = calculateWindChill(temperature, windSpeed);
});
