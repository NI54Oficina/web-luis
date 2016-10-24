<?php include_once("header.php") ?>

<body id="portfolio ">

<?php include_once("menu.php") ?>

<?php include_once("home.php") ?>


<section class="col-lg-12 col-sm-12 col-md-12 col-xs-12 portfolio pantalla">

  <div class="col-lg-12 col-sm-12 col-md-12 col-xs-12 portfolio-header">


      <a href="index.php">  <img class="img-logo" src="img/logo-interno.svg" alt="" /></a> <br>



  <div class="col-lg-4 col-sm-10 col-md-4 col-xs-10 portfolio-box" >

    <h2>
      Portfolio
    </h2>
    <div class="links">
      <a href="#"><img src="img/fb.svg" alt="" /></a>
      <a href="#"><img src="img/ytube.svg" alt="" /></a>
      <a href="#"><img src="img/linkedin.svg" alt="" /></a>
    </div>
  </div>


  </div>



</section>

<ul class="col-lg-12 col-sm-12 col-md-12 col-xs-12 nav-porfolio pantalla">
  <li id="todos" class="selected">Todos <div ></div></li>
  <li id="motion" class="not-selected">Motion  <div ></div></li>
  <li id="arquitectura" class="not-selected">Arquitectura  <div ></div></li>
  <li id="render" class="not-selected">Render  <div ></div></li>

  <div class="" style="width:100%; background-color:rgba(104,211,169,.5); position:relative; height:1px; margin-top: -16.5px; z-index: -1;"> </div>

</ul>

<section class="col-lg-12 col-sm-12 col-md-12 col-xs-12 portfolio-2 pantalla">




  <h2><span>A</span>nima tu <span>K</span>i</h2>

  <div class="col-lg-12 col-sm-12 col-md-12 col-xs-12  container-portfolio">
    <script>
    var imagenes=new Array();
    var auxArray;
    </script>

    <?php include_once("proyecto.php") ?>

            <div class="col-lg-12 col-sm-12 col-md-12 col-xs-12 todos solapa">

                <?php
                $projectIndex=0;
                foreach($listadoProject as $project){
                   ?>

                  <div class="col-lg-4 col-sm-12 col-md-4 col-xs-12 to-show">

                        <img class="" src='img/<?php echo $project[2][0] ?>.jpg' subgrupo="<?php echo $projectIndex; ?>"  alt="" />
                        <div class="covered">
                            <h1><?php echo $project[1]; ?></h1>
                            <p><?php echo $project[3]; ?></p>
                        </div>
                  </div>
                  <script>
                  auxArray=new Array();
                  <?php foreach($project[2] as $projec){ ?>
                      auxArray.push('<?php echo $projec; ?>');
                    <?php } ?>
                    imagenes.push(auxArray);
                  </script>
                <?php
                  $projectIndex++;
              }  ?>

            </div>


            <div class="col-lg-12 col-sm-12 col-md-12 col-xs-12 motion solapa">

                <?php
                $projectIndex=0;
                foreach($listadoProject as $project){

                  if($project[0]==2){?>

                    <div class="col-lg-4 col-sm-12 col-md-4 col-xs-12 to-show">
                          <img class="" src='img/<?php echo $project[2][0] ?>.jpg'  subgrupo="<?php echo $projectIndex; ?>"  alt="" />
                          <div class="covered">
                            <h1><?php echo $project[1] ?></h1>
                            <p><?php echo $project[3] ?></p>
                          </div>
                    </div>
                    <script>
                    auxArray=new Array();
                    <?php foreach($project[2] as $projec){ ?>
                        auxArray.push('<?php echo $projec; ?>');
                      <?php } ?>
                      imagenes.push(auxArray);
                    </script>

                <?php
                $projectIndex++;}}  ?>

            </div>

            <div class="col-lg-12 col-sm-12 col-md-12 col-xs-12 arquitectura solapa">

                <?php
                  $projectIndex=0;
                  foreach($listadoProject as $project){

                  if($project[0]==3){?>


                    <div class="col-lg-4 col-sm-12 col-md-4 col-xs-12 to-show">
                          <img class="" src='img/<?php echo $project[2][0] ?>.jpg'  subgrupo="<?php echo $projectIndex; ?>"  alt="" />
                          <div class="covered">
                            <h1><?php echo $project[1] ?></h1>
                            <p><?php echo $project[3] ?></p>
                          </div>
                    </div>
                    <script>
                    auxArray=new Array();
                    <?php foreach($project[2] as $projec){ ?>
                        auxArray.push('<?php echo $projec; ?>');
                      <?php } ?>
                      imagenes.push(auxArray);
                    </script>

                <?php   $projectIndex++; }}  ?>



            </div>

            <div class="col-lg-12 col-sm-12 col-md-12 col-xs-12 render solapa">

                <?php foreach($listadoProject as $project){

                  if($project[0]==1){?>

                    <div class="col-lg-4 col-sm-12 col-md-4 col-xs-12 to-show">
                          <img class=" " src='img/<?php echo $project[2][0] ?>.jpg' subgrupo="<?php echo $projectIndex; ?>"  alt="" />
                          <div class="covered">
                            <h1><?php echo $project[1] ?></h1>
                            <p><?php echo $project[3] ?></p>
                          </div>
                    </div>
                    <script>
                    auxArray=new Array();
                    <?php foreach($project[2] as $projec){ ?>
                        auxArray.push('<?php echo $projec; ?>');
                      <?php } ?>
                      imagenes.push(auxArray);
                    </script>

                <?php   $projectIndex++; }}  ?>

            </div>


  </div>

</section>



<div class="col-lg-12 col-sm-12 col-md-12 col-xs-12 img-screen">
  <button class="border" type="button" name="button" onclick="closeGallery()">X</button>
      <div id="img-to-display" class="">

      </div>


</div>


<div class="col-lg-12 col-sm-12 col-md-12 col-xs-12 img-remain">


    <!-- <img class="col-lg-1 col-sm-3 col-md-1 col-xs-3 remain-show" src="img/test.png" alt="" /> -->

</div>

<div class="col-lg-12 col-sm-12 col-md-12 col-xs-12 img-description">

    <p>
        Equipo Rocket
    </p>
    <p>
        2016
    </p>
   <button id="button-display" type="button" name="button" onclick="hideDisplay()">+</button>
</div>

</section>

</body>
</html>
