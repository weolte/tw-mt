"use strict";
(() => {
    const rippleElements = document.getElementsByClassName("ripple");
    for (let i = 0; i < rippleElements.length; i++) {
        rippleElements[i].addEventListener("mousedown", (e) => {
            const elementPosition = e.target.getBoundingClientRect();
            const ripple = document.createElement("div");
            ripple.style.position = "absolute";
            ripple.style.top = e.clientY - elementPosition.top + "px";
            ripple.style.left = e.clientX - elementPosition.left + "px";
            ripple.style.width = "0";
            ripple.style.aspectRatio = "1 / 1";
            ripple.style.backgroundColor = "var(--md-sys-color-on-surface)";
            ripple.style.borderRadius = "50%";
            ripple.style.transform = "translate(-50%, -50%)";
            ripple.style.opacity = "0.1";
            ripple.style.transitionDuration = "350ms";
            ripple.classList.add("animate-ripple");
            rippleElements[i].prepend(ripple);
            setTimeout(() => {
                const rippleEl = e.target.getElementsByClassName("animate-ripple")[0];
                if (!rippleEl)
                    return;
                rippleEl.style.width = "282%";
            }, 350);
        });
        rippleElements[i].addEventListener("mouseup", (e) => {
            const rippleEl = e.target.getElementsByClassName("animate-ripple")[0];
            if (!rippleEl)
                return;
            rippleEl.style.opacity = "0";
            setTimeout(() => {
                rippleEl.remove();
            }, 350);
        });
        rippleElements[i].addEventListener("mouseleave", (e) => {
            const rippleEl = e.target.getElementsByClassName("animate-ripple")[0];
            if (!rippleEl)
                return;
            rippleEl.style.opacity = "0";
            setTimeout(() => {
                rippleEl.remove();
            }, 350);
        });
    }
})();
