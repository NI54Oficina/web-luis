var hidden=true;
var menu=false;
var marginGetter;
var mobile=false;

$(document).on("ready",function(){
	isMobile();
	// caserrousel();

	AlignCenter();
	CenterToParent();
	toShow();
	// setMargin();
	menuDisplay();
	remainings();
	changeProject();
	centerNav();
	setHeightContacto();
	setHeightPorfolioImage();
	setHeightPorfolioiFrame();
	mailing();

	verReel();



});


$( window ).resize(function() {
	isMobile();

	CenterToParent();
	AlignCenter();
	setMargin();
  centerNav();
	setHeightContacto();
	setHeightPorfolioImage();
	setHeightPorfolioiFrame();
AlignVertical();


});


function CenterToParent(){
	$(".center-to-parent").each(function(){
		$(this).css("margin-top",0);
		$(this).css("margin-bottom",0);
		$(this).css("padding-bottom",0);
		$(this).css("padding-top",0);
		var parent= $(this).parent();
		//console.log($(this).outerHeight());
		if($(this).outerHeight()>0){
			var paddingTop= ($(parent).innerHeight()/2)-($(this).outerHeight()/2);
			$(this).css("padding-top",paddingTop+"px");
		}
	});

	$(".center-to-parent-d").each(function(){
		$(this).css("margin-top",0);
		$(this).css("margin-bottom",0);
		$(this).css("padding-bottom",0);
		$(this).css("padding-top",0);
		var parent= $(this).parent();
		//console.log($(this).outerHeight());
		if($(this).outerHeight()>0){
			var paddingTop= ($(parent).innerHeight()/2)-($(this).outerHeight()/2);
			paddingTop= paddingTop/2;
			$(this).css("padding-top",paddingTop+"px");
		}
	});

	$(".center-to-parent-m").each(function(){
		$(this).css("margin-top",0);
		$(this).css("margin-bottom",0);
		$(this).css("padding-bottom",0);
		$(this).css("padding-top",0);
		var parent= $(this).parent();
		// console.log($(this).outerHeight());
		var paddingTop= ($(parent).innerHeight()/2)-($(this).outerHeight()/2);
		$(this).css("display","inline-block");
		$(this).css("position","relative");

		$(this).css("top",'-'+paddingTop+"px");
	});
	$(".center-to-parent-t").each(function(){
		$(this).css("margin-top",0);
		$(this).css("margin-bottom",0);
		$(this).css("padding-bottom",0);
		$(this).css("padding-top",0);
		var parent= $(this).parent();
		// console.log($(this).outerHeight());
		var paddingTop= ($(parent).innerHeight()/2)-($(this).outerHeight()/2);
		$(this).css("display","inline-block");
		$(this).css("position","relative");

		$(this).css("top",paddingTop+"px");
	});
}

var flkty;
var flktyInit=false;
function toShow(){

	$('.to-show').on('click', function(){

		if(flkty){
			flkty.destroy();
			$('.carousel-cell').remove();
		}

		$(".image").css('opacity','0');
			var src = $(this).find('img').attr('src');
			var grupo = $(this).find('img').attr('subgrupo');
			var titulo = $(this).find('h1').text();
			var subtitulo = $(this).find('p').text();


			$('.portfolio').fadeOut(300);
			$('.portfolio-2').fadeOut(300);
			$('.nav-porfolio').fadeOut(300);


			if(imagenes[grupo][0]==0){
				hidden=null;

				$("#img-to-display").prepend( '<iframe id="video-mostrado" style="max-width:90vw; width:1080px; height:454px;"src="'+imagenes[grupo][2]+'" frameborder="0" allowfullscreen></iframe>' );
				$(".img-description").css('margin-top','0px');
				$('#button-display').text('');
				$('#next-img').css('display', 'none');
				$('#prev-img').css('display', 'none');
				$('.img-remain').css('margin-top','30px');
				// setHeightPorfolioiFrame();


			}else{
				hidden=true;

				$("#img-to-display").prepend( '<img id="imagen-mostrada" src="img/'+imagenes[grupo][2]+'.jpg" alt="" style="max-height:inherit;" /> ' );
				$('#next-img').css('display', 'block');
				$('#prev-img').css('display', 'block');



					for(var i=2; i < imagenes[grupo].length; i++){

							$('.img-remain').prepend( '	<div class="carousel-cell"><img class="remain-show center-to-parent" src="img/'+imagenes[grupo][i]+'.jpg" alt="" /><div class="cover-hover"></div></div>' );
							remainings();

					};





					// setHeightPorfolioImage();
					setTimeout(function(){
						//img-remain poyo flickity-enabled is-draggable
					//	$(".poyo").removeClass("is-draggable");
					//	$(".poyo").removeClass("flickity-enabled");
				var elem = document.querySelector('.poyo');

				flkty = new Flickity( elem, {
				  // options
				  cellAlign: 'left',
				groupCells: true,
				  contain: true
				});


				setMargin();
			},500);
			setMargin();

			}


			// finish=true;
			// console.log(finish);

			$(".img-description > p:first-child").text(titulo);
			$(".img-description > p:nth-child(2)").text(subtitulo);



				$('.image').fadeIn(500,function(){

						 AlignCenter();
						 slider();
						 setHeightPorfolioiFrame();
						 setMargin();
						 AlignVertical();
						 centrarMiniatura();
						 $('.image').css('opacity','1');


			});



		// 	setTimeout(function(){
		// 		 AlignCenter();
		// 		setMargin();
		// },1000);






		})




}

function closeGallery(){
	$('.image').fadeOut(500);
	$('.portfolio').fadeIn(500);
	$('.portfolio-2').fadeIn(500);
	$('.nav-porfolio').fadeIn(300);
	$('#video-mostrado').attr('src','');
	$('#video-mostrado').remove();
	$('.img-description').css('bottom','0');

		//$('.img-remain').empty();
		if(flkty){
			flkty.destroy();
			$('.carousel-cell').remove();
		}

			$("#img-to-display").empty();
		$('#button-display').text('+');

}

function hideDisplay() {
	 height= $('.img-remain').outerHeight();

	 realMargin =parseInt($('.img-description').css('margin-top'));

	if(hidden==true){

			$(".img-description").animate({bottom:height+'px'}, 1000);
			$('#button-display').text('-');

			hidden=false;
	}else if(hidden==false){

			$(".img-description").animate({bottom:'0px'}, 1000);
			$('#button-display').text('+')
			hidden=true;
	}else{
			$(".img-description").css('margin-top','0px');
	}


	}

///settea margen superior para las imagenes de remaining
function setMargin(){

	var height= $('.img-remain').outerHeight();


	// $('.img-description').css('min-height','80px');



}

function AlignCenter(){
	var a= $("#img-to-display").width();
	var b =$("#img-to-display").children().width();
	$("#img-to-display").children().css('margin-left', (a/2 - b/2)+'px');
}

function menuDisplay(){

		$("#btn-menu").click(function(){

			if(menu){

				$("#inicio").fadeOut( "slow");
				$(".pantalla").fadeIn( "slow");
				$('.prueba-visible').switchClass( "prueba-visible", "show-menu-text", 0, "easeInOutQuad" );
				$('.prueba-invisible').switchClass( "prueba-invisible", "hide-menu-text", 0, "easeInOutQuad" );


				menu=false;

			}else{

				$(".pantalla").fadeOut( "slow");
				$("#inicio").fadeIn( "slow");
				$('.show-menu-text').switchClass( "show-menu-text", "prueba-visible",0, "easeInOutQuad" );
				$('.hide-menu-text').switchClass( "hide-menu-text", "prueba-invisible", 0, "easeInOutQuad" );

				menu=true;
			}



centerNav();

		});

}


function remainings(){
		$('.cover-hover').click(function(){

			var padre= $(this).parent().get( 0 );

			var src = $(padre).children().first().attr('src');

			$("#img-to-display > img").attr("src", src);

			AlignCenter();

			AlignVertical();


		});
	}


function changeProject(){


	$('.nav-porfolio  li').click(function(){

			var currentSolapa=$(this);


			$('.solapa').each(function(){	$(this).fadeOut(0, function(){ }); });
			$('.container-portfolio > .'+currentSolapa.prop('id')).fadeIn(300);


			$('.selected').each(function(){$(this).switchClass('selected', 'not-selected', 0, "linear" ) });
			currentSolapa.switchClass('not-selected', 'selected', 0, "linear" );



	});
}

function centerNav(){

		$('.li-min').each(function(){
		 var parentWidth= $(this).parent().parent().width();
		 var thisWidth = $(this).outerWidth();
		 $(this).css('margin-left', parentWidth/2 - thisWidth/2+'px');

		});




}


function slider(){



var currentIndex = 0,
  items = $('.remain-show');
  itemAmt = items.length;

	items.eq(currentIndex).attr('src');


function cycleItems() {
  var item = $('.remain-show');
	var src = item.eq(currentIndex).attr('src');
	$("#img-to-display > img").attr("src", src);
	AlignCenter();
	AlignVertical();



}


$('#next-img').click(function() {

	 currentIndex += 1;


  if (currentIndex > itemAmt - 1) {

    currentIndex = 0;

  }
  cycleItems();
});

$('#prev-img').click(function() {

  currentIndex -= 1;


  if (currentIndex < 0) {

    currentIndex = itemAmt - 1;
  }
  cycleItems();
});


}

function mailing(){
		$('#submitMail').click( function(){
			var valid;
			valid = validateContact();
			var miObjeto={};
			miObjeto.nombre=$("#nombre").val();
			miObjeto.email=$("#email").val();
			miObjeto.asunto=$("#asunto").val();
			miObjeto.mensaje=$("#mensaje").val();


			if(valid) {
				$.post("mail2.php",miObjeto,function(data){

				})
				.fail(function(data) {
				$('#error-mail').html("Ups! Ha ocurrido un problema intente nuevamente...");
				})
				.done(function(data) {
      		$('#error-mail').html(data);
  			});
			}


		});

}

function validateContact() {

    var valid = true;

    if(!$("#nombre").val()) {
        $("#nombre").val("Este campo no debe estar vacio").css('color','red');

        valid = false;
    }else{
			$("#nombre").css('color','white');
		}
    if(!$("#email").val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)) {
        $("#email").val("Datos invalidos").css('color','red');

        valid = false;
    }else{
			  $("#email").css('color','white');
		}

    if(!$("#asunto").val()) {
        $("#asunto").val("Este campo no debe estar vacio").css('color','red');

        valid = false;
    }else{
		    $("#asunto").css('color','white');
		}
    if(!$("#mensaje").val()) {
        $("#mensaje").val("Este campo no debe estar vacio").css('color','red');

        valid = false;
    }else{
			  $("#mensaje").css('color','black');
		}
    return valid;
}


function setHeightContacto(){
 var height= parseInt($('.contacto').css('height'));
 var heighWs= parseInt($(document).height());

 $('.right-box-contact').css('min-height', heighWs-height+'px');
 $('.left-box-contact').css('min-height', heighWs-height+'px');


}


function setHeightPorfolioiFrame(){
 var height= parseInt($('.img-description').height());
 var heighWs= parseInt($(window).height());


	$('.img-to-display > iframe').css('height',heighWs-height-100+'px');

};


function setHeightPorfolioImage(){
 var height= parseInt($('#img-description').height());
 var heighWs= parseInt($(window).height());


	$('#img-to-display').css('max-height',heighWs-height);
	$('#img-to-display > img').css('max-height',heighWs-height+'px');

};

function AlignVertical(){

	if(mobile){
		var altura=$('.img-screen').outerHeight() ;

		var alturaElem= parseInt($('#imagen-mostrada').height());

		$('.image .img-screen #imagen-mostrada').css('bottom',altura/2 - alturaElem/2 -80+'px' );



	}


}

function isMobile(){
	if($(window).width() < 767){
		mobile=true;
	}
}

function verReel(){
	$('.reel-button').click(function(){

		$('.button-menu').fadeOut(100);

		$('.container-inicio').fadeOut('slow',function(){ $('.video-reel').fadeIn();$('.video-reel').css('display', 'block'); $('#inicio').css('background', 'none'); $('#inicio').css('background', '#1d1d1d')});



	})
}

function closeReel(){
$('.video-reel').fadeOut(
		function(){
			$('.container-inicio').fadeIn();
			$('.button-menu').fadeIn();
			$('#inicio').css('background', 'url(../img/rombo-textura-menu-portfolio.svg),radial-gradient(ellipse at center, rgba(162,234,189,1) 0%, rgba(36,82,55,1) 100%)');
			$('#video-mostrado-reel').attr('src','');
			$('#video-mostrado-reel').remove();
		}
);

}


function centrarMiniatura(){

	$('.img-remain div img').each(function(){
		var anchoPadre= $(this).parent().innerWidth();
		var anchoSelf= parseInt($(this).outerWidth());
		var altoSelf= parseInt($(this).outerHeight());

		var padLeft=(100/2 - anchoSelf/2)/2+5;

		var padTop=(90/2 - altoSelf/2)/2+5;


		$(this).css('padding',padTop+'px '+padLeft+'px');

	})


}
