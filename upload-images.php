<?php
session_start();
if(!isset($_SESSION["login"])||$_SESSION["login"]==0){
	header("Location: ./login"); /* Redirect browser */
	exit();
}?>
<html>
 
<head>   
 
<!-- 1 -->
<link href="dropzone.css" type="text/css" rel="stylesheet" />
 
<!-- 2 -->
<script src="dropzone.js"></script>
 
</head>
 
<body>
 
<!-- 3 -->
<form action="upload.php" class="dropzone"></form>
   
</body>
 
</html>