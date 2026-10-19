document.addEventListener('DOMContentLoaded', () => {
    console.log("Course selection page loaded successfully");

    // 1. Ochiq kurslardagi "Kursni boshlash" tugmalari
    const startBtns = document.querySelectorAll('.start-btn');

    startBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Bosilgan kurs kartasidagi sarlavhani olish (masalan: Frontend Dasturlash)
            const card = btn.closest('.course-card');
            const courseTitle = card ? card.querySelector('h3').innerText : '';

            // Kerak bo'lsa tanlangan kurs nomini LocalStorage ga saqlab qo'yish mumkin
            if (courseTitle) {
                localStorage.setItem('selectedCourse', courseTitle);
            }

            // Main Dashboard (Asosiy Boshqaruv Paneli) oynasiga o'tish
            window.location.href = "../main_dashboard/index.html";
        });
    });

    // 2. Yopiq kurs tugmalari bosilganda ogohlantirish
    const lockedBtns = document.querySelectorAll('.locked-btn');

    lockedBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            alert("Ushbu kurs hozircha yopiq. Avval faol kurslarni yakunlashingiz kerak.");
        });
    });

    // 3. Yuqori o'ng tarafdagi xabarnoma (Notification) tugmasi
    const notifBtn = document.querySelector('.notif-btn');

    if (notifBtn) {
        notifBtn.addEventListener('click', () => {
            alert("Sizda hozircha yangi bildirishnomalar yo'q.");
        });
    }
});