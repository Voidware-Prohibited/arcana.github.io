document.addEventListener("DOMContentLoaded", function() {
    var titleArea = document.getElementById("titlearea");
    if (!titleArea) return;

    // 1. Create the Hamburger Button Component
    var hamburger = document.createElement("button");
    hamburger.id = "custom-hamburger-btn";
    hamburger.setAttribute("aria-label", "Toggle Custom Menu");
    // Simple, clean inline SVG icon for the hamburger lines
    hamburger.innerHTML = '<svg viewBox="0 0 24 24" width="24" height="24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" fill="currentColor"/></svg>';

    // 2. Create the Custom Links Menu Content
    var menuContainer = document.createElement("div");
    menuContainer.id = "custom-dropdown-menu";
    menuContainer.innerHTML = `
        <ul>
            <li><a href="https://github.com">GitHub Repository</a></li>
            <li><a href="https://your-site.com">Project Blog</a></li>
            <li><a href="https://example.com">External Guides</a></li>
        </ul>
    `;

    // 3. Inject elements into the #titlearea container
    // We prepend the hamburger so it sits naturally at the beginning of the flex/grid flow
    titleArea.prepend(hamburger);
    titleArea.appendChild(menuContainer);

    // 4. Toggle visibility on click
    hamburger.addEventListener("click", function(e) {
        e.stopPropagation();
        menuContainer.classList.toggle("open");
        hamburger.classList.toggle("active");
    });

    // Close menu if clicking anywhere outside of it
    document.addEventListener("click", function(e) {
        if (!menuContainer.contains(e.target) && e.target !== hamburger) {
            menuContainer.classList.remove("open");
            hamburger.classList.remove("active");
        }
    });
});
