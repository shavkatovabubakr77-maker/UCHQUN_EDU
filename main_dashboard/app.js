console.log("Main Dashboard loaded successfully");

// Darslarga o'tish tugmalari bosilganda
const courseBtns = document.querySelectorAll('.card-btn');

courseBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const modules = ['HTML Asoslari', 'CSS Visual Dizayn', 'JavaScript Dasturlash'];
        alert(`${modules[index]} moduli darslariga o'tilmoqda...`);
    });
});