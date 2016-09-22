// ==UserScript==
// @name         Asana for large monitors
// @namespace    https://github.com/jdavidheiser/tampermonkey_scripts/
// @version      0.0001
// @description  maximize screen real estate when using Asana.
// @author       JD
// @match        https://app.asana.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function addGlobalStyle(css) {
        var head, style;
        head = document.getElementsByTagName('head')[0];
        if (!head) { return; }
        style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = css;
        head.appendChild(style);
    }
    addGlobalStyle('#right_pane_container { max-width: 2500px !important; width: 95% !important; }');
})();
