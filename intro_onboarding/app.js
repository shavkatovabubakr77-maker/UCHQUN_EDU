const nextBtn = document.getElementById('nextBtn');
const skipBtn = document.getElementById('skipBtn');

// Davom etish tugmasi bosilganda keyingi Kurslar sahifasiga o'tadi
if (nextBtn) {
    nextBtn.addEventListener('click', () => {
        window.location.href = "../course_selection/index.html";
    });
}

// O'tkazib yuborish tugmasi bosilganda ham Kurslar sahifasiga o'tadi
if (skipBtn) {
    skipBtn.addEventListener('click', () => {
        window.location.href = "../course_selection/index.html";
    });
}