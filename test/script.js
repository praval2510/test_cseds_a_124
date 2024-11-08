<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Page</title>
    <style>
        /* Basic styling for the page */
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
        }

        /* Container for login box */
        .login-container {
            width: 300px;
            padding: 2rem;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            background-color: #fff;
            border-radius: 10px;
        }

        /* Style for input fields */
        .login-input {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-size: 16px;
            box-sizing: border-box;
        }

        /* Style for submit button */
        .submit-btn {
            width: 100%;
            padding: 10px;
            font-size: 16px;
            font-weight: bold;
            color: white;
            background-color: #4CAF50;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s;
        }

        /* Hover effect on button */
        .submit-btn:hover {
            background-color: #45a049;
        }
    </style>
</head>
<body>

<div class="login-container">
    <form id="loginForm" onsubmit="handleSubmit(event)">
        <input type="text" id="username" class="login-input" placeholder="Username" required>
        <input type="password" id="password" class="login-input" placeholder="Password" required>
        <button type="submit" class="submit-btn">Login</button>
    </form>
</div>

<script>
    function handleSubmit(event) {
        event.preventDefault(); // Prevent form submission
        // Get values
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Simple redirect to next page (replace 'nextpage.html' with your URL)
        window.location.href = 'nextpage.html';
    }
</script>

</body>
</html>
