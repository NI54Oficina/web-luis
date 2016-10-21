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
</ul>

<section class="col-lg-12 col-sm-12 col-md-12 col-xs-12 portfolio-2 pantalla">




  <h2><span>A</span>nima tu <span>K</span>i</h2>

  <div class="col-lg-12 col-sm-12 col-md-12 col-xs-12  container-portfolio">

    <?php include_once("proyecto.php") ?>

            <div class="col-lg-12 col-sm-12 col-md-12 col-xs-12 todos solapa">

                <?php foreach($listadoProject as $project){ ?>

                  <div class="col-lg-4 col-sm-12 col-md-4 col-xs-12 to-show">
                        <img class="" src='img/<?php echo $project[2][0] ?>.jpg' alt="" />
                        <div class="covered">
                            <h1><?php echo $project[1] ?></h1>
                            <p>Año</p>
                        </div>
                  </div>

                <?php }  ?>

            </div>


            <div class="col-lg-12 col-sm-12 col-md-12 col-xs-12 motion solapa">

                <?php foreach($listadoProject as $project){

                  if($project[0]==2){?>

                    <div class="col-lg-4 col-sm-12 col-md-4 col-xs-12 to-show">
                          <img class="" src='img/<?php echo $project[2][0] ?>.jpg' alt="" />
                          <div class="covered">
                            <h1><?php echo $project[1] ?></h1>
                            <p>Año</p>
                          </div>
                    </div>

                <?php }}  ?>

            </div>

            <div class="col-lg-12 col-sm-12 col-md-12 col-xs-12 arquitectura solapa">

                <?php foreach($listadoProject as $project){

                  if($project[0]==3){?>


                    <div class="col-lg-4 col-sm-12 col-md-4 col-xs-12 to-show">
                          <img class="" src='img/<?php echo $project[2][0] ?>.jpg' alt="" />
                          <div class="covered">
                            <h1><?php echo $project[1] ?></h1>
                            <p>Año</p>
                          </div>
                    </div>

                <?php }}  ?>



            </div>

            <div class="col-lg-12 col-sm-12 col-md-12 col-xs-12 render solapa">

                <?php foreach($listadoProject as $project){

                  if($project[0]==1){?>

                    <div class="col-lg-4 col-sm-12 col-md-4 col-xs-12 to-show">
                          <img class=" " src='img/<?php echo $project[2][0] ?>.jpg' alt="" />
                          <div class="covered">
                            <h1><?php echo $project[1] ?></h1>
                            <p>Año</p>
                          </div>
                    </div>

                <?php }}  ?>

            </div>


  </div>

</section>


<section class="col-lg-12 col-sm-12 col-md-12 col-xs-12 image">

<div class="col-lg-12 col-sm-12 col-md-12 col-xs-12 img-screen">
  <button class="border" type="button" name="button" onclick="closeGallery()">X</button>
  <img id="img-to-display"src="" alt="" />
</div>

<!-- <script>
<?php // foreach($imagenes as $imagen){ ?>
  miArrayJs.push(" <?php// $echo $imagen; ?>");
  <?php // } ?>
</script> -->

<div class="col-lg-12 col-sm-12 col-md-12 col-xs-12 img-remain">
    <img class="col-lg-1 col-sm-3 col-md-1 col-xs-3 remain-show" src="img/test.png" alt="" />
    <img class="col-lg-1 col-sm-3 col-md-1 col-xs-3 remain-show " src="img/test.png" alt="" />
    <img class="col-lg-1 col-sm-3 col-md-1 col-xs-3 remain-show" src="img/test.png" alt="" />
    <img class="col-lg-1 col-sm-3 col-md-1 col-xs-3 remain-show" src="img/test.png" alt="" />
    <img class="col-lg-1 col-sm-3 col-md-1 col-xs-3 remain-show" src="img/test.png" alt="" />
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
