function toggleMenu(){
    const menu = document.getElementById("menu-links");
        
    // Toggle the menu visibility
    if (menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}