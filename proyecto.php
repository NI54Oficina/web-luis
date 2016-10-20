
<?php


$listadoProject=array();




for($i=1; $i<=5; $i++) {


  array_push($listadoProject,["Nombre proyecto", $i, []]);



      for ($j=1; $j<=5; $j++  ) {


        array_push($listadoProject[$i-1][2],'/img/'.$i.'-img-'.$j.'.png');

      }

}


$listadoVideos=array();

array_push($listadoVideos, ['1', "Winter 2010", 'https://www.youtube.com/embed/HkcfDotc6cA']);
// array_push($listadoVideos, ['1', "Stand Coca-Cola 2010", 'https://www.youtube.com/embed/50uaC7JWpyA']);
// array_push($listadoVideos, ['1', "Pm Pepsi 2010", 'https://www.youtube.com/embed/TfFTOEPNpec5']);
// array_push($listadoVideos, ['1', "Elind", 'https://www.youtube.com/embed/oeANZyZWTto']);
// array_push($listadoVideos, ['1', "Lamp", 'https://www.youtube.com/embed/W6ymFuUv5fk']);

// array_push($listadoVideos, ['1', "Wine", 'https://www.behance.net/gallery/43598597/Wine']);
// array_push($listadoVideos, ['1', "Vid", 'https://www.behance.net/gallery/16307085/GLAZED-PROPERTY-DREAM']);


array_push($listadoVideos, ['2', "Pm Caen", 'https://www.youtube.com/embed/O7oHORxXsTg']);
// array_push($listadoVideos, ['2', "Parliament", 'https://www.youtube.com/embed/fLeanWWEtEE']);
// array_push($listadoVideos, ['2', "Pm Kreter", 'https://www.youtube.com/embed/SbTxbUt2dws']);
// array_push($listadoVideos, ['2', "Next", 'https://www.youtube.com/embed/SwDbagFAh8g']);
// array_push($listadoVideos, ['2', "Camioneta", 'https://www.youtube.com/embed/V4DfhP-Xirk']);
// array_push($listadoVideos, ['2', "Sixno", 'https://www.youtube.com/embed/7cM4l9zPuOY']);
// array_push($listadoVideos, ['2', "Visualc", 'https://www.youtube.com/embed/884hHJD2mfo']);
// array_push($listadoVideos, ['2', "Bemlbr", 'https://www.youtube.com/embed/HilfgCSycKI']);
// array_push($listadoVideos, ['2', "Pmalf", 'https://www.youtube.com/embed/z-eW5ou9LVk']);
// array_push($listadoVideos, ['2', "Pmbolas", 'https://www.youtube.com/embed/nMkQJj5k4Ew']);
// array_push($listadoVideos, ['2', "Pmcaps", 'https://www.youtube.com/embed/nMkQJj5k4Ew']);
// array_push($listadoVideos, ['2', "Auladigital", 'https://www.youtube.com/embed/SaSH0QQdniI']);
// array_push($listadoVideos, ['2', "Eldiario", 'https://www.youtube.com/embed/l2ioszP20LY']);
// array_push($listadoVideos, ['2', "Hym", 'https://www.youtube.com/embed/o-zzW8smruo']);
// array_push($listadoVideos, ['2', "Dyb", 'https://www.youtube.com/embed/GrKFF-dUSyY']);
// array_push($listadoVideos, ['2', "Deftv", 'https://www.youtube.com/embed/H7fbmk4OK0s']);
// array_push($listadoVideos, ['2', "Deftvb", 'https://www.youtube.com/embed/6mgzhD9IrF8']);
// array_push($listadoVideos, ['2', "Aat", 'https://www.youtube.com/embed/3jgw9Eeq8BM']);
// array_push($listadoVideos, ['2', "Argv", 'https://www.youtube.com/embed/YDE4Hl2JRGk']);
// array_push($listadoVideos, ['2', "Arj", 'https://www.youtube.com/embed/k6qAmeGwSmE']);
// array_push($listadoVideos, ['2', "Barreltala", 'https://www.youtube.com/embed/3o3Dq_xPgfU']);
// array_push($listadoVideos, ['2', "Apfvl1", 'https://www.youtube.com/embed/gCNjYaqNtU8']);
// array_push($listadoVideos, ['2', "Apfvl2", 'https://www.youtube.com/embed/vV9aXB1IiBA']);
// array_push($listadoVideos, ['2', "Infvl", 'https://www.youtube.com/embed/whjj5zTq6qs']);
// array_push($listadoVideos, ['2', "Ldc5n", 'https://www.youtube.com/embed/syG1UFz2oLw']);
// array_push($listadoVideos, ['2', "Apmuro", 'https://www.youtube.com/embed/C0YYWkHBH8o']);
// array_push($listadoVideos, ['2', "Lyn", 'https://www.youtube.com/embed/670wbacwhVo']);
// array_push($listadoVideos, ['2', "MM", 'https://www.youtube.com/embed/NCr9B6ZHGUE']);
// array_push($listadoVideos, ['2', "Corazón", 'https://www.youtube.com/embed/0HlNfFHxLEg']);
// array_push($listadoVideos, ['2', "Ch", 'https://www.youtube.com/embed/R653n8_ljS8']);
// array_push($listadoVideos, ['2', "Rep", 'https://www.youtube.com/embed/PYiEl69qn-I']);
// array_push($listadoVideos, ['2', "Ciud", 'https://www.youtube.com/embed/NnH9LcVY-74']);
// array_push($listadoVideos, ['2', "Mc", 'https://www.youtube.com/embed/JdXby5IGvXA']);
// array_push($listadoVideos, ['2', "Jobs", 'https://www.youtube.com/embed/ITwl0xLZJVc']);
// array_push($listadoVideos, ['2', "My", 'https://www.youtube.com/embed/sS41cCoVWq4']);
// array_push($listadoVideos, ['2', "Crece", 'https://www.youtube.com/embed/MyZriO1ipY4']);
// array_push($listadoVideos, ['2', "Pi", 'https://www.youtube.com/embed/yf2SDwmgl4E']);
// array_push($listadoVideos, ['2', "Mez", 'https://www.youtube.com/embed/1zEY1EtzEAg']);
// array_push($listadoVideos, ['2', "Mate", 'https://www.youtube.com/embed/MUDhmSCzg20']);
// array_push($listadoVideos, ['2', "Onirico", 'https://www.youtube.com/embed/FBJewXFUL1s']);
// array_push($listadoVideos, ['2', "Terraza", 'https://www.youtube.com/embed/2rgdezLXPYY']);
// array_push($listadoVideos, ['2', "Lecajete", 'https://www.youtube.com/embed/mrJNBCmY03M']);

array_push($listadoVideos, ['3', "Grandvision", 'https://www.youtube.com/embed/aMnsly-BB40']);
// array_push($listadoVideos, ['3', "Cocina", 'https://www.behance.net/gallery/43584663/Kitchen-render']);
// array_push($listadoVideos, ['3', "Int", 'https://www.behance.net/gallery/16764109/interior']);
// array_push($listadoVideos, ['3', "Arcor", 'https://www.behance.net/gallery/15762179/Propuesta-vidrieras-Arcorcenter']);
// array_push($listadoVideos, ['3', "Stands", 'https://www.behance.net/gallery/13287757/Stands']);



 ?>
 <script>
     console.log(<?php echo json_encode($listadoProject); ?>);
 </script>
