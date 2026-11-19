(function () {
    function initCustomMenu() {
        const hamburgerBtn = document.getElementById('custom-hamburger-btn');
        const topNavMenu = document.getElementById('top-nav-menu');

            hamburgerBtn.addEventListener('click', () => {
                const isOpen = topNavMenu.classList.toggle('is-open');
                hamburgerBtn.setAttribute('aria-expanded', String(isOpen));
            });

    }

    // Bind to DOM ready event, and support environments with partial lifecycle caching
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initCustomMenu);
    } else {
        initCustomMenu();
    }

    const hamburgerBtn = document.getElementById('custom-hamburger-btn');
    const topNavMenu = document.getElementById('top-nav-menu');

    // 2. Close menu when clicking anywhere outside the menu or button
    document.addEventListener('click', (event) => {
        const clickedInsideMenu = topNavMenu.contains(event.target);
        const clickedButton = hamburgerBtn.contains(event.target);

        if (!clickedInsideMenu && !clickedButton && topNavMenu.classList.contains('is-open')) {
            topNavMenu.classList.remove('is-open');
            hamburgerBtn.setAttribute('aria-expanded', 'false');
        }
    });
})();
