<?php

include 'header.php';

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Business Owner Interface</title>
    <link rel="stylesheet" href="Odashboard.css"> <!-- Replace with your CSS file path -->
</head>
<body>
    <div class="logo">
        <img src="logo.png" alt="Logo"> <!-- Replace with your logo -->
    </div>
    <h1>Welcome to EcoClean!</h1>

    <div class="container">
        <div class="post-form">
            <textarea placeholder="What's on your mind?"></textarea>
            <input type="file" accept="image/*">
            <button>Post</button>
        </div>

        <!-- Example of a posted item -->
        <div class="post">
            <p>Here's a post!</p>
            <img src="example.jpg" alt="Example Image">
        </div>
    </div>

    <!-- Your background overlays -->
    <script src="scripts.js"></script> <!-- Optional: Include JavaScript if needed -->
</body>
</html>