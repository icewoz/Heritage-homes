// ===============================
// SMOOTH SCROLL
// ===============================
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});


// ===============================
// FADE-IN ANIMATION
// ===============================
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
});

cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "0.6s ease";
    observer.observe(card);
});


// ===============================
// GREETING MESSAGE
// ===============================
function greetingMessage() {
    const hour = new Date().getHours();
    let msg = "";

    if (hour < 12) msg = "Good Morning. Welcome to an Exclusive Experience.";
    else if (hour < 18) msg = "Good Afternoon. Discover Luxury Living.";
    else msg = "Good Evening. Step Into Elegance.";

    const el = document.getElementById("greeting");
    if (el) el.innerText = msg;
}
greetingMessage();


// ===============================
// INVITE CODE SYSTEM
// ===============================
function checkAccess() {
    let code = prompt("Enter Invite Code:");

    if (!code) return;

    code = code.trim().toUpperCase();

    if (code === "ELITE2026") {
        alert("Access Granted ✔");
        localStorage.setItem("access", "true");
        unlockContent();
    } else {
        alert("Access Denied ❌");
    }
}


// ===============================
// UNLOCK CONTENT
// ===============================
function unlockContent() {
    const locked = document.querySelector(".locked");
    const overlay = document.getElementById("lockOverlay");

    if (locked) locked.style.display = "block";
    if (overlay) overlay.style.display = "none";
}


// Auto unlock
window.onload = function() {
    if (localStorage.getItem("access") === "true") {
        unlockContent();
    }
};


// ===============================
// VIRTUAL TOUR SLIDER
// ===============================
let current = 0;

function nextSlide() {
    const slides = document.querySelectorAll(".slide");
    if (slides.length === 0) return;

    slides[current].style.display = "none";
    current = (current + 1) % slides.length;
    slides[current].style.display = "block";
}

function prevSlide() {
    const slides = document.querySelectorAll(".slide");
    if (slides.length === 0) return;

    slides[current].style.display = "none";
    current = (current - 1 + slides.length) % slides.length;
    slides[current].style.display = "block";
}


// ===============================
// LEAD FORM
// ===============================
function captureLead() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");

    if (!name.value || !email.value) {
        alert("Fill all fields");
        return;
    }

    if (!email.value.includes("@")) {
        alert("Enter valid email");
        return;
    }

    alert("Thank you " + name.value + "! We will contact you.");

    name.value = "";
    email.value = "";
}


// ===============================
// COUNTDOWN TIMER
// ===============================
function countdown() {
    const el = document.getElementById("countdown");
    if (!el) return;

    let time = 1800; // 30 mins

    setInterval(() => {
        let m = Math.floor(time / 60);
        let s = time % 60;

        el.innerText = "Offer Ends In: " + m + "m " + s + "s";

        if (time > 0) time--;
    }, 1000);
}
countdown();


// ===============================
// SCROLL PROGRESS BAR
// ===============================
window.onscroll = function() {
    let scrollTop = document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (scrollTop / height) * 100;

    const bar = document.getElementById("progressBar");
    if (bar) bar.style.width = scrolled + "%";
};


// ===============================
// BOOK TOUR BUTTON
// ===============================
function bookTour() {
    alert("Luxury tour booked. Concierge will contact you.");
}


// ===============================
// CONSOLE BRANDING 😎
// ===============================
console.log("🏆 Project Elevé - Hackathon Demo");
console.log("Luxury Digital Campaign Prototype");
