
<?php


$listadoProject=array();


for($i=1; $i<=5; $i++) {


  array_push($listadoProject,["Nombre proyecto", $i, []]);



      for ($j=1; $j<=5; $j++  ) {


        array_push($listadoProject[$i-1][2],'/img/'.$i.'-img-'.$j.'.png');

      }

}




 ?>
 <script>
     console.log(<?php echo json_encode($listadoProject); ?>);
 </script>
