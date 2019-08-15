const navbar = () => {
    let nav = document.getElementById("navbar");

    if (!nav) return;

    // hide navbar onload if in landing page
    let landing = document.getElementById("landing");
    displayNavBar(!landing);
    if (landing) removeButtons();

    // get view height
    let windowHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    window.addEventListener("scroll", () => {

        // check if need to show / hide
        if (landing) {
            if (window.pageYOffset <= windowHeight) {
                // for landing, hide since not scrolled to listing (height = 1vh)
                displayNavBar(false);
            } else {
                // show nav bar
                displayNavBar(true);
            }
        }
    });

    function displayNavBar(status) {
        nav.style.opacity = status ? "100" : "0";
    }

    function removeButtons() {
        // no need to nav on landing page
        document.querySelector(".nav-wrapper .nav-items").remove();
        // no need to go back / to home page
        document.querySelector(".m-nav-wrapper .top-bar-left .top-bar-icon").remove();
    }

    // mobile nav bar menu button trigger
    let m_menu_btn = document.querySelector(".top-bar-menu img");

    if (m_menu_btn) {
        setMobNavMenuTrigger();
        setMobNavMenuItemClickTrigger();
    }

    function setMobNavMenuTrigger() {
        m_menu_btn.addEventListener("click", e => {
            let m_menu = document.getElementById("m-nav-menu");
            let isOpen = m_menu.classList.contains("active");

            if (isOpen) {
                displayMobNavMenu(false);
            } else {
                displayMobNavMenu(true);
                // stop propagation so click event is removed
                e.stopPropagation();
                // trigger close on outside click
                hideOnClickOutside(document.querySelector("#m-nav-menu"))
            }
        });
    }

    function displayMobNavMenu(status) {
        let m_menu = document.getElementById("m-nav-menu");
        if (status) {
            // show
            m_menu.classList.remove("inactive");
            m_menu.classList.add("active");
        } else {
            // hide
            m_menu.classList.remove("active");
            m_menu.classList.add("inactive");
        }
    }

    function setMobNavMenuItemClickTrigger() {
        // find all items
        let items = document.querySelectorAll("#m-nav-menu .list .list-row");
        // add click listeners
        for (let i = 0; i < items.length; i++) {
            items[i].addEventListener("click", e => {
                displayMobNavMenu(false);
            });
        }
    }

    function hideOnClickOutside(element) {
        const outsideClickListener = event => {
            if (!element.contains(event.target) && isVisible(element)) { // or use: event.target.closest(selector) === null
                displayMobNavMenu(false);
                removeClickListener()
            }
        }

        const removeClickListener = () => {
            document.removeEventListener('click', outsideClickListener)
        }
        document.addEventListener('click', outsideClickListener)
        
        // source (2018-03-11): https://github.com/jquery/jquery/blob/master/src/css/hiddenVisibleSelectors.js
        const isVisible = elem => !!elem && !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
    }

}

module.exports = navbar;