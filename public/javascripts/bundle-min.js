/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/javascripts/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/javascripts/app.js":
/*!***********************************!*\
  !*** ./public/javascripts/app.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const navbar = __webpack_require__(/*! ./navbar */ \"./public/javascripts/navbar.js\");\n\nwindow.onload = function() {\n\n    navbar();\n\n}\n\n\n//# sourceURL=webpack:///./public/javascripts/app.js?");

/***/ }),

/***/ "./public/javascripts/navbar.js":
/*!**************************************!*\
  !*** ./public/javascripts/navbar.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const navbar = () => {\n    let nav = document.getElementById(\"navbar\");\n\n    if (!nav) return;\n\n    // hide navbar onload if in landing page\n    let landing = document.getElementById(\"landing\");\n    displayNavBar(!landing);\n    if (landing) removeButtons();\n\n    // get view height\n    let windowHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);\n    window.addEventListener(\"scroll\", () => {\n\n        // check if need to show / hide\n        if (landing) {\n            if (window.pageYOffset <= windowHeight) {\n                // for landing, hide since not scrolled to listing (height = 1vh)\n                displayNavBar(false);\n            } else {\n                // show nav bar\n                displayNavBar(true);\n            }\n        }\n    });\n\n    function displayNavBar(status) {\n        nav.style.opacity = status ? \"100\" : \"0\";\n    }\n\n    function removeButtons() {\n        // no need to nav on landing page\n        document.querySelector(\".nav-wrapper .nav-items\").remove();\n        // no need to go back / to home page\n        document.querySelector(\".m-nav-wrapper .top-bar-left .top-bar-icon\").remove();\n    }\n\n    // mobile nav bar menu button trigger\n    let m_menu_btn = document.querySelector(\".top-bar-menu img\");\n\n    if (m_menu_btn) {\n        setMobNavMenuTrigger();\n        setMobNavMenuItemClickTrigger();\n    }\n\n    function setMobNavMenuTrigger() {\n        m_menu_btn.addEventListener(\"click\", e => {\n            let m_menu = document.getElementById(\"m-nav-menu\");\n            let isOpen = m_menu.classList.contains(\"active\");\n\n            if (isOpen) {\n                displayMobNavMenu(false);\n            } else {\n                displayMobNavMenu(true);\n                // stop propagation so click event is removed\n                e.stopPropagation();\n                // trigger close on outside click\n                hideOnClickOutside(document.querySelector(\"#m-nav-menu\"))\n            }\n        });\n    }\n\n    function displayMobNavMenu(status) {\n        let m_menu = document.getElementById(\"m-nav-menu\");\n        if (status) {\n            // show\n            m_menu.classList.remove(\"inactive\");\n            m_menu.classList.add(\"active\");\n        } else {\n            // hide\n            m_menu.classList.remove(\"active\");\n            m_menu.classList.add(\"inactive\");\n        }\n    }\n\n    function setMobNavMenuItemClickTrigger() {\n        // find all items\n        let items = document.querySelectorAll(\"#m-nav-menu .list .list-row\");\n        // add click listeners\n        for (let i = 0; i < items.length; i++) {\n            items[i].addEventListener(\"click\", e => {\n                displayMobNavMenu(false);\n            });\n        }\n    }\n\n    function hideOnClickOutside(element) {\n        const outsideClickListener = event => {\n            if (!element.contains(event.target) && isVisible(element)) { // or use: event.target.closest(selector) === null\n                displayMobNavMenu(false);\n                removeClickListener()\n            }\n        }\n\n        const removeClickListener = () => {\n            document.removeEventListener('click', outsideClickListener)\n        }\n        document.addEventListener('click', outsideClickListener)\n        \n        // source (2018-03-11): https://github.com/jquery/jquery/blob/master/src/css/hiddenVisibleSelectors.js\n        const isVisible = elem => !!elem && !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);\n    }\n\n}\n\nmodule.exports = navbar;\n\n//# sourceURL=webpack:///./public/javascripts/navbar.js?");

/***/ })

/******/ });