/* Add your JavaScript to this file */
document.addEventListener("DOMContentLoaded", () => {
    const newslform = document.querySelector(".newsletter form");
    const emailfield = document.querySelector("#email");
    const message = document.querySelector(".message");

    newslform.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = emailfield.value.trim();
        const isvalid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

        if (isvalid) {
            message.textContent =
                `Thank you! Your email address ${email} has been added to our mailing list!`;
            emailfield.value = "";
        } else {
            message.textContent = "Please enter a valid email address.";
        }

        message.style.color = "white";
    });
});
