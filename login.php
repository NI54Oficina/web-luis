<?php
session_start();
if(isset($_SESSION["login"])&&$_SESSION["login"]==1){
	header("Location: ./generator"); /* Redirect browser */
	exit();
}
if(isset($_POST["pass"])){
	$md5= md5($_POST["pass"]);
	if($md5=="2aa507936ca92e1a5cc779fdcb582915"){
		$_SESSION["login"]=1;
		header("Location: ./generator"); /* Redirect browser */
		exit();
	}
}
?>
<html>
<form method="post">
<label>Password<label>
<input type="password" name="pass" />
<button>Login</button>
</form>
</html>