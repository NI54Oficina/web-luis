<?php
$listadoProject= json_decode(file_get_contents ("json.json"));
file_put_contents ("json.json",json_encode($listadoProject));
?>