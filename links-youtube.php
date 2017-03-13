<?php
session_start();
if(!isset($_SESSION["login"])||$_SESSION["login"]==0){
	header("Location: ./login"); /* Redirect browser */
	exit();
}?>
<html>
<?php 
if(isset($_POST["link"])){ ?>
	<div style="background:cadetblue;padding:10px;color:white;">
	<p>Link convertido</p>
	<?php
	$link= str_replace("https://youtu.be/","",$_POST["link"]);
	echo "https://www.youtube.com/embed/".$link."?rel=0&amp;controls=0&amp;showinfo=0&amp;modestbranding=1&amp;iv_load_policy=3";
	?>
	</div><br>
	<?php
}
?>
<img src="img/youtube-link-tuto.png" />
<br><br><br><hr>
<form method="post">
<input name="link" value="" />

<button>Convertir Link</button>
</form>
</html>