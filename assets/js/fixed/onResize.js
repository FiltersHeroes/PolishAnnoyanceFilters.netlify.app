window.addEventListener('load', function () {
    var onResize = function () {
        // apply dynamic padding at the top of the body according to the fixed navbar height
        if (window.innerWidth <= 1024) {
            document.querySelector("body").style.paddingTop = (document.querySelector(".navbar-fixed-top").offsetHeight - 100) + "px";
        }
        else {
            document.querySelector("body").style.paddingTop = "";
        }
    };

    // attach the function to the window resize event
    window.addEventListener("resize", (event) => {
        onResize();
    });

    // call it also when the page is ready after load or reload
    onResize();
});
