document.addEventListener("DOMContentLoaded", function () {
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            target.scrollIntoView({ behavior: "smooth" });
        });
    });

    const themeButton = document.createElement("button");
    themeButton.textContent = "Toggle Theme";
    themeButton.style.position = "fixed";
    themeButton.style.top = "20px";
    themeButton.style.right = "20px";
    themeButton.style.padding = "10px";
    themeButton.style.cursor = "pointer";
    themeButton.style.borderRadius = "8px";
    themeButton.style.background = "#000";
    themeButton.style.color = "#fff";
    document.body.appendChild(themeButton);

    themeButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });

    const darkModeStyle = document.createElement("style");
    darkModeStyle.innerHTML = `
        .dark-mode {
            background: linear-gradient(135deg,rgb(83, 162, 240),rgb(38, 83, 128),rgb(8, 51, 91));
            color: white;
        }
        .dark-mode section {
            background: rgba(33, 185, 167, 0.76);
        }
        .dark-mode a {
            color:rgb(237, 225, 117);
        }
        .dark-mode a:hover {
            color:rgb(233, 209, 111);
        }
    `;
    document.head.appendChild(darkModeStyle);

    const headerText = document.querySelector("header h1");
    const text = "HEY THERE!";
    let index = 0;

    function typeText() {
        if (index < text.length) {
            headerText.textContent += text.charAt(index);
            index++;
            setTimeout(typeText, 150);
        }
    }

    headerText.textContent = ""; 
    typeText();
});
