  <?php include_once("header.php") ?>
  <body id="contacto">
  <?php include_once("menu.php") ?>
  <?php include_once("home.php") ?>
<section class="col-lg-12 col-sm-12 col-md-12 col-xs-12 contacto pantalla">



<div class="col-lg-12 col-sm-12 col-md-12 col-xs-12 contact-header">


        <a href="index.php">  <img class="img-logo" src="img/logo-interno.svg" alt="" /></a> <br>




<div class="col-lg-5 col-sm-10 col-md-5 col-xs-10 contact-box" >

  <h2>
    <span>C</span>ontacta tu <span>K</span>i
  </h2>
  <div class="links">
    <a href="#"><img src="img/fb.svg" alt="" /></a>
    <a href="#"><img src="img/ytube.svg" alt="" /></a>
    <a href="#"><img src="img/linkedin.svg" alt="" /></a>
  </div>
</div>


</div>
</section>

<section class="col-lg-12 col-sm-12 col-md-12 col-xs-12 contacto-2 pantalla">
<div class="col-lg-6 col-sm-12 col-md-6 col-xs-12 left-box-contact">
  <form id="miForm"class="" action="index.html" method="post">
    <div id="mail-status"></div>
    <input id="nombre" type="text" name="nombre" value="" placeholder="Nombre"> <br>
    <input id="email" type="text" name="email" value="" placeholder="Email"><br>
    <input id="asunto" type="text" name="asunto" value="" placeholder="Asunto"><br>
  </form>
</div>

<div class="col-lg-6 col-sm-12 col-md-6 col-xs-12 right-box-contact">
  <p>
    Mensaje
  </p>
  <textarea id="mensaje" name="mensaje" rows="8" cols="40"></textarea> <br>

  <button id="submitMail" type="button" name="button">Enviar</button>

</div>




</section>
</body>
</html>
