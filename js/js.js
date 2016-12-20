var hidden=true;
var menu=false;
var marginGetter;
var mobile=false;

$(document).on("ready",function(){
	isMobile();
	caserrousel();

	AlignCenter();
	CenterToParent();
	toShow();
	setMargin();
	menuDisplay();
	remainings();
	changeProject();
	centerNav();
	setHeightContacto();
	setHeightPorfolioImage();
	setHeightPorfolioiFrame();
	mailing();



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


function toShow(){

	$('.to-show').on('click', function(){

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

							$('.img-remain').prepend( '	<div><img class="col-lg-2 col-sm-3 col-md-1 col-xs-3 remain-show" src="img/'+imagenes[grupo][i]+'.jpg" alt="" /></div>' );
							remainings();

					}

					// setHeightPorfolioImage();

			}

			$(".img-description > p:first-child").text(titulo);
			$(".img-description > p:last-child").text(subtitulo);


			$('.image').fadeIn(600,function(){
			setMargin();
			AlignCenter();
			slider();
			setHeightPorfolioiFrame();
			caserrousel();



		});




		})




}

function closeGallery(){
	$('.image').fadeOut(500);
	$('.portfolio').fadeIn(500);
	$('.portfolio-2').fadeIn(500);
	$('.nav-porfolio').fadeIn(300);
		$('.img-remain').empty();
			$("#img-to-display").empty();
		$('#button-display').text('+');
	// $('.button-menu').css('visibility','visible');
}

function hideDisplay() {
	 height= $('.img-remain').outerHeight();

	 realMargin =parseInt($('.img-description').css('margin-top'));

	if(hidden==true){

			$(".img-description").animate({marginTop:(realMargin-height-15)+'px'}, 1000);
			$('#button-display').text('-');

			hidden=false;
	}else if(hidden==false){

			$(".img-description").animate({marginTop:-height+'px'}, 1000);
			$('#button-display').text('+')
			hidden=true;
	}else{
			$(".img-description").css('margin-top','0px');
	}


	}

///settea margen superior para las imagenes de remaining
function setMargin(){

	var height= $('.img-remain').outerHeight();


	$('.img-description').css('min-height',height);
	$('.img-description').css('margin-top','-'+height+'px');


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
		$('.remain-show').click(function(){
			var src = $(this).attr('src');
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






		// var parentWidth= ($(window).width()-100)/3;
		//
		// $('.li-min').each(function(){
		//
		//
		//  var thisWidth = parentWidth/2 -;
		//
		//  $(this).parent().parent().css('width', parentWidth+'px');
		//  $(this).css('margin-left', )
		//
		//  console.log( parentWidth/2 - thisWidth/2);
		//  console.log(  $(this).parent().parent());
		//  console.log(  $('.container-inicio').css('width'));
}


function slider(){



var currentIndex = 0,
  items = $('.remain-show');
  itemAmt = items.length;
	//items.css("display","none");
	items.eq(currentIndex).attr('src');
	// multiplicateDotNav(itemAmt);

function cycleItems() {
  var item = $('.remain-show');
	var src = item.eq(currentIndex).attr('src');
	$("#img-to-display > img").attr("src", src);
	AlignCenter();
	AlignVertical();
	console.log("que onda loco");

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



// console.log("sale slider");
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

				});
	}


		});

}

function validateContact() {
    var valid = true;
    // $(".demoInputBox").css('background-color','');
    // $(".info").html('');
    if(!$("#nombre").val()) {
        $("#nombre").html("Este campo no debe estar vacio");
        // $("#nombre").css('background-color','#ffb60a');
        valid = false;
    }else{
			  $("#nombre").css('background-color','#6bcea3');
		}
    if(!$("#email").val()) {
        $("#email").html("Este campo no debe estar vacio");
        // $("#email").css('background-color','#ffb60a');
        valid = false;
    }else{
			  $("#email").css('background-color','#6bcea3');
		}
    // if(!$("#userEmail").val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)) {
    //     $("#userEmail-info").html("(invalid)");
    //     $("#userEmail").css('background-color','#ffb60a');
    //     valid = false;
    // }
    if(!$("#asunto").val()) {
        $("#asunto").html("Este campo no debe estar vacio");
        // $("#asunto").css('background-color','#ffb60a');
        valid = false;
    }else{
			  $("#asunto").css('background-color','#6bcea3');
		}
    if(!$("#mensaje").val()) {
        $("#mensaje").html("Este campo no debe estar vacio");
        // $("#mensaje").css('background-color','#FFFFDF');
        valid = false;
    }else{
			  $("#mensaje").css('background-color','#6bcea3');
		}
    return valid;
}


function setHeightContacto(){
 var height= parseInt($('.contacto').css('height'));
 var heighWs= parseInt($(document).height());

 $('.right-box-contact').css('min-height', heighWs-height+'px');
 $('.left-box-contact').css('min-height', heighWs-height+'px');
 console.log("se ejecuta conta");

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

		$('.image .img-screen #imagen-mostrada').css('bottom',altura/2 - alturaElem/2 -40+'px' );
		 console.log("entra algo");
	}


}

function isMobile(){
	if($(window).width() < 767){
		mobile=true;
	}
}

function caserrousel(){

	$('.your-class').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 5,
		centerMode: true,
		variableWidth: true

		 });

}
