// Initialize EmailJS with your Public Key
(function() {
    emailjs.init("eJnmoHZ6XAUrh72pD"); // Public Key شما
})();

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.priymery-btn').addEventListener('click', function() {
        const firstName = document.getElementById("Fname").value.trim();
        const lastName = document.getElementById("Last").value.trim();
        const subject = document.getElementById("Subject").value;
        const email = document.getElementById("Email").value.trim();
        const message = document.getElementById("massage").value.trim();
        const errorMessageDiv = document.getElementById("error-message");
        
        // Reset error styles
        document.querySelectorAll("input, textarea").forEach(input => {
            input.classList.remove("error");
        });
        
        // Check if fields are empty
        if (!firstName || !lastName || !email || !message) {
            if (!firstName) document.getElementById("Fname").classList.add("error");
            if (!lastName) document.getElementById("Last").classList.add("error");
            if (!email) document.getElementById("Email").classList.add("error");
            if (!message) document.getElementById("massage").classList.add("error");

            errorMessageDiv.textContent = "لطفاً همه فیلدها را پر کنید.";
            errorMessageDiv.style.display = "block";
        } else {
            // Create a message content
            const emailContent = `
                نام: ${firstName} ${lastName}
                موضوع: ${subject}
                ایمیل: ${email}
                پیام: ${message}
            `;

            // Send the email
            emailjs.send("service_wwj2iu1", "template_jhljvro", {
                to_email: "sanaeskandarpoor80@gmail.com",
                message: emailContent,
            }).then(function(response) {
                console.log("پیام با موفقیت ارسال شد!", response);
                alert("پیام با موفقیت ارسال شد!");
                document.getElementById("contactForm").reset(); // Reset form after sending
                errorMessageDiv.style.display = "none"; // Hide error message
            }, function(error) {
                console.log("خطا در ارسال پیام: ", error);
                alert("خطا در ارسال پیام. لطفاً دوباره تلاش کنید.");
            });
        }
    });
});
