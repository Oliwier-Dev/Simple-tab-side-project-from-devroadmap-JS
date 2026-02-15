const ui = {
    buttons: document.querySelectorAll(".tab-button"),
    contents: document.querySelectorAll(".tab-content")
};

ui.buttons.forEach(button => {
    button.addEventListener("click", () => {
        const dataNumber = button.dataset.tab;

        ui.buttons.forEach(btn => btn.classList.remove("active"));

        ui.contents.forEach(content => content.classList.remove("active"))

        button.classList.add("active")

        const activeContent = document.querySelector(`.tab-content[data-tab="${dataNumber}"]`)
        activeContent.classList.add("active")
    })
});
