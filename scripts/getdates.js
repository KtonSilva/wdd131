document.addEventListener('DOMContentLoaded', (event) => {
    const today = new Date();
    document.getElementById('currentyear').textContent = today.getFullYear();
    document.getElementById('lastModified').textContent = `Last Modification: ${document.lastModified}`;
});
