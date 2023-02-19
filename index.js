document.addEventListener("click", (e) => {
    const targetEl = e.target;
    const parentEl = targetEl.closest("div");

    if (targetEl.classList.contains("active")) {
        parentEl.classList.toggle("check");
    }
});