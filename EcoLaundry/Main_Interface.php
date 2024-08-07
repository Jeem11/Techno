<?php
include 'headers.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EcoClean</title>
    <link rel="stylesheet" href="Main_Interface.css">
</head>
<body>
    <div class="left-side">
        <img src="l1.png" alt="Image 1" class="side-image">
        <img src="l2.png" alt="Image 2" class="side-image">
        <img src="laundryBG.png" alt="Image 3" class="side-image">
    </div>
    <div class="center-side">
        <div class="container">
            <img src="logo.png" alt="EcoClean Logo" class="logo-image">
            <h1>EcoClean: Your Partner in Perfect Laundry</h1>
            <button id="login-button">Login</button>
            <div id="login-options" class="dropdown-content">
                <a href="alogin.php">Admin Login</a>
                <a href="ologin.php">Owner Login</a>
                <a href="elogin.php">Employee Login</a>
                <a href="clogin.php">Client Login</a>
            </div>
        </div>
    </div>
    <div class="right-side">
        <img src="r1.png" alt="Image 4" class="side-image">
        <img src="r2.png" alt="Image 5" class="side-image">
		<img src="r3.png" alt="Image 6" class="side-image">
    </div>
    <script src="Main_Interface.js"></script>
</body>
</html>
