document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            // Get form data
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const subject = document.getElementById("subject").value;
            const message = document.getElementById("message").value;

            // Create a submission object
            const submission = {
                name, email, subject, message,
                timestamp: new Date().toISOString()
            };

            // Send data to server
            fetch("http://localhost:5500/store_submission", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(submission)
            })
            .then(response => response.json())
            .then(data => {
                console.log("Submission stored:", data);
                form.reset();
            })
            .catch(error => {
                console.error("Error storing submission:", error);
                alert("There was an error processing your submission. Please try again.");
            });
        });
    }
});