const selector = "div.tw-full-height.tw-relative.tw-z-above > div > div > div > button";
setInterval(
    function() {
        const el = document.querySelector(selector);
	    if (el) el.click();
    },
 5000);