<?php
session_start();
if(!isset($_SESSION["login"])||$_SESSION["login"]==0){
	header("Location: ./login"); /* Redirect browser */
	exit();
}?>
<html>
<a href="./links-youtube" target="_blank">Links youtube</a>
<a href="./upload-images" target="_blank">Subir imagenes al sitio</a>
<?php $listadoProject= json_decode(file_get_contents ("json.json"));

if(isset($_POST["titulo"])){
	$projecto;
	if($_POST["id"]>=count($listadoProject)){
		array_push($listadoProject,array());
		$_POST["id"]= count($listadoProject)-1;
	}
	$projecto= $listadoProject[$_POST["id"]];
	if(!isset($projecto)||$projecto==null||is_object($projecto)){
		$projecto=array();
	}
	
	
	$projecto[0]=$_POST["seccion"];
	$projecto[1]=$_POST["titulo"];
	$projecto[2]= array();
	array_push($projecto[2], $_POST["tipo"]);
	array_push($projecto[2],$_POST["thumb"]);
	$_POST["data"]=preg_replace('/[ \t]+/', ' ', preg_replace('/[\r\n]+/', "", $_POST["data"]));
	$content= explode(",",$_POST["data"]);
	foreach($content as $c){
		array_push($projecto[2],$c);
	}
	$projecto[3]=$_POST["year"];
	if(isset($_POST["link"])){
		$projecto[4]=$_POST["link"];
	}else{
		$projecto[4]=$_POST["link"];
	}
	$listadoProject[$_POST["id"]]=array_values($projecto);
	file_put_contents ("json.json",json_encode($listadoProject));
	echo "Guardado";
}else if(isset($_POST["delete"])&&$_POST["delete"]==1){
	unset($listadoProject[$_POST["id"]]);
	$listadoProject=array_values($listadoProject);
	file_put_contents ("json.json",json_encode($listadoProject));
}

?>
<?php $index=0; ?>
<?php foreach($listadoProject as $project){ ?>
<br>
<h3 class="titulo-entrada" style="width:300px;display:inline-block;"><?php echo $project[1]; ?></h3><form method="post" style="display:inline-block;width:100px;">
<input type="hidden" name="id" value="<?php echo $index; ?>"/> <input type="hidden" name="delete" value="1" /><button>Borrar</button>
</form><br>
<label class="label-show" for="toggle-<?php echo $index;?>">Mostrar/Ocultar</label>
<input type="checkbox" id="toggle-<?php echo $index;?>" />
<form method="post">
<label>Titulo</label>
<input name="titulo" value="<?php echo $project[1]; ?>">
<label>Seccion</label>
<select name="seccion">
<option value="3" <?php if($project[0]==3){?>selected <?php }?>>Arquitectura</option>
<option value="2" <?php if($project[0]==2){?>selected <?php }?>>Motion</option>
<option value="1" <?php if($project[0]==1){?>selected <?php }?>>Audiovisual</option>
</select>



<label>Tipo</label>
<select name="tipo">
<option value="0" <?php if($project[2][0]==0){?>selected <?php }?> >Video</option>
<option value="1" <?php if($project[2][0]==1){?>selected <?php }?> >Galeria</option>
</select>


<label>Thumbnail</label>
<input name="thumb" value="<?php echo $project[2][1]; ?>">

<label>Video/imagenes</label>
<textarea name="data">
<?php $auxI=2;
$isFirst=1;
while(isset($project[2][$auxI])){
	if($isFirst==1){
		$isFirst++;
	}else{
		echo ",";
		echo "\n";
	}
	echo $project[2][$auxI];
	$auxI++;
}
 ?>
</textarea>

<label>Año</label>
<input name="year" value="<?php echo $project[3]; ?>">

<input type="hidden" name="link" value="">
<input type="hidden" name="id" value="<?php echo $index; ?>"><br><br>
<button>Guardar</button>
</form>
<hr>
<?php $index++; } ?>



<label class="label-show" for="toggle-<?php echo $index;?>">Agregar nuevo</label>
<input type="checkbox" id="toggle-<?php echo $index;?>" />
<form method="post">
<label>Titulo</label>
<input name="titulo" value="">
<label>Seccion</label>
<select name="seccion">
<option value="3" selected >Arquitectura</option>
<option value="2" >Motion</option>
<option value="1" >Audiovisual</option>
</select>



<label>Tipo</label>
<select name="tipo">
<option value="0" selected >Video</option>
<option value="1"  >Galeria</option>
</select>


<label>Thumbnail</label>
<input name="thumb" value="">

<label>Video/imagenes</label>
<textarea name="data"></textarea>

<label>Año</label>
<input name="year" value="2017">

<input type="hidden" name="link" value="null">
<input type="hidden" name="id" value="<?php echo $index; ?>"><br><br>
<button>Guardar</button>
</form>



<style>
form{width:100%;display:block;padding: 10px 0;}
label{display:block;padding:10px;margin-top:20px;}
textarea{width:500px;height:300px;}
input[type=checkbox] {
   position: absolute;
   
   left: -9999px;
}
.label-show { 
  -webkit-appearance: push-button;
  -moz-appearance: button; 
  display: inline-block;
  /*margin: 60px 0 10px 0;*/
  cursor: pointer;
}
input[type=checkbox] + form{display:none;}
input[type=checkbox]:checked + form{display:block;}
</style>
</html>