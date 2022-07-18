window.onload = function () {

    var start = document.getElementById("start");
    var delay = 250;
    var initialValue = "";
    var interval;
    var i = 0;

    var stop = document.getElementById("stop");
    var animation = document.getElementById("animation");
    var fontsize = document.getElementById("fontsize");
    var turbo = document.getElementById("turbo");
    var text_area = document.getElementById("text-area");

    start.onclick = startAnimation;
    stop.onclick = stopAnimation;
    animation.onchange = setInitialText;
    fontsize.onchange = changeFont;
    turbo.onchange = turboChange;

    function startAnimation() {
        interval = null;
        enableElement(stop);
        disableElement(start);
        disableElement(animation);
        disableElement(text_area);
        playAnimation();
    }

    function stopAnimation() {
        setInitialText();
        disableElement(stop);
        enableElement(start);
        enableElement(animation);
        enableElement(text_area);
        clearInterval(interval);
        interval = null;
    }

    function changeFont() {
        text_area.style.fontSize = parseInt(fontsize.value) + "pt";
    }

    function turboChange() {
        clearInterval(interval);
        if (interval != null) {
            delay = turbo.checked ? 50 : 250;
            playAnimation();
        }
    }

    function setInitialText() {
        initialValue = ANIMATIONS[animation.value];
        text_area.value = initialValue;
    }

    function enableElement(elem) {
        elem.removeAttribute("disabled")
    }

    function disableElement(elem) {
        elem.setAttribute("disabled", "disabled")
    }

    function playAnimation() {
        interval = null;
        if (initialValue !== "") {
            var value = initialValue.split("=====\n");
            interval = setInterval(animate, delay, value);
        }
    }


    function animate(arr) {
        if (i === arr.length) i = 0;
        text_area.value = arr[i];
        i++;
    }
}