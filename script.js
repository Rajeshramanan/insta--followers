// This script prevents the form from submitting as a real login
document.getElementById("loginForm").addEventListener("submit", function(event) {
    // Prevent the form from submitting the traditional way
    event.preventDefault();
    
    // Optional: Display a message
    alert("Form submitted for demonstration. In a real application, your data would be processed.");

    // You can redirect to another page if needed
    // window.location.href = "thank-you.html";
});
