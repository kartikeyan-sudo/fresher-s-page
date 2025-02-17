document.addEventListener("DOMContentLoaded", function() {
    function adjustLayout() {
        if (window.innerWidth < 768) {
            document.body.style.textAlign = "left";
            document.querySelector("header").style.padding = "10px";
            document.querySelector("h1").style.fontSize = "2rem";
            document.querySelectorAll(".countdown, .about, .contact").forEach(section => {
                section.style.margin = "10px";
                section.style.padding = "15px";
            });
        } else {
            document.body.style.textAlign = "center";
            document.querySelector("header").style.padding = "20px";
            document.querySelector("h1").style.fontSize = "3rem";
            document.querySelectorAll(".countdown, .about, .contact").forEach(section => {
                section.style.margin = "20px";
                section.style.padding = "20px";
            });
        }
    }
    
    window.addEventListener("resize", adjustLayout);
    adjustLayout();
});
