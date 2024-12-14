let generatedOtp = null;
document.getElementById('generateOtp').addEventListener('click', function () {
    generatedOtp = Math.floor(100000 + Math.random() * 900000); 
    alert(`Your OTP is: ${generatedOtp}`); 
    document.getElementById('otp').disabled = false;
    document.getElementById('login').disabled = false;
    document.getElementById('message').textContent = "OTP generated! Check your alert.";
});

// Login button
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const enteredOtp = document.getElementById('otp').value;

    if (enteredOtp == generatedOtp) {
        window.location.href = 'Book.html'; 
    } else {
        document.getElementById('message').textContent = "Invalid OTP. Please try again.";
    }
});
