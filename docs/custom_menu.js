(function () {
    function initCustomMenu() {
        // 1. Target the precise internal container where Doxygen alignment resides
        var projectAlign = document.getElementById("projectrow");
        var titleArea = document.getElementById("titlearea");

        if (!projectAlign || !titleArea) return;

        // Prevent duplicate injections on fast frame refreshes/navigation scripts
        if (document.getElementById("custom-hamburger-btn")) return;

        // 2. Create the Hamburger Button Component
        var hamburger = document.createElement("button");
        hamburger.id = "custom-hamburger-btn";
        hamburger.setAttribute("aria-label", "Toggle Custom Menu");
        hamburger.setAttribute("aria-expanded", "false");
        // Lightweight SVG inline icon (Hamburger bars)
        hamburger.innerHTML = '<svg viewBox="0 0 24 24" width="24" height="24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" fill="currentColor"/></svg>';

        // 3. Create the Custom Links Menu Content
        var menuContainer = document.createElement("div");
        menuContainer.id = "custom-dropdown-menu";
        menuContainer.innerHTML = `
            <ul>
                <li><a href="/about">ABOUT</a></li>
                <li><a href="/wiki">WIKI</a></li>
                <li><a href="/docs">DOCS</a></li>
                <li><a href="/license">LICENSE</a></li>
            </ul>
        `;

        // 4. Inject structural elements cleanly
        // Prepend inside the specific text cell so it snaps perfectly to the left of the project name
        projectAlign.prepend(hamburger);
        // Append full-width container directly to the root header bar wrapper
        titleArea.appendChild(menuContainer);

        // 5. Setup Action Event Listeners
        hamburger.addEventListener("click", function(e) {
            e.stopPropagation();
            var isOpen = menuContainer.classList.toggle("open");
            hamburger.classList.toggle("active");
            hamburger.setAttribute("aria-expanded", isOpen ? "true" : "false");
        });

        // Dismiss the dropdown when clicking an arbitrary element on the page
        document.addEventListener("click", function(e) {
            if (!menuContainer.contains(e.target) && e.target !== hamburger) {
                menuContainer.classList.remove("open");
                hamburger.classList.remove("active");
                hamburger.setAttribute("aria-expanded", "false");
            }
        });
    }

    // Bind to DOM ready event, and support environments with partial lifecycle caching
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initCustomMenu);
    } else {
        initCustomMenu();
    }
})();
