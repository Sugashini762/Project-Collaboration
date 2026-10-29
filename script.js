
const form = document.getElementById("studentForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const department = document.getElementById("department").value.trim();

    if (name === "" || email === "" || department === "") {
        message.style.color = "red";
        message.textContent = "Please fill in all fields!";
        return;
    }

    message.style.color = "green";
    message.textContent = "Registration successful, " + name + "!";

    form.reset();
});

