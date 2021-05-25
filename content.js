const selector = ".VGQNd";
setInterval(
    function() {
        const el = document.querySelector(selector);
	    if (el) el.click();
    },
 5000);