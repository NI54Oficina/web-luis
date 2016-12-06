var hidden=true;
var menu=false;
var marginGetter;

$(document).on("ready",function(){


	CenterToParent();
	toShow();
	menuDisplay();
	remainings();
	changeProject();
	centerNav();



});


$( window ).resize(function() {
  centerNav();
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

				$("#img-to-display").prepend( '<iframe width="1080" height="579" src="'+imagenes[grupo][2]+'" frameborder="0" allowfullscreen></iframe>' );
				$(".img-description").css('margin-top','0px');
				$('#button-display').text('');

			}else{
				hidden=true;

				$("#img-to-display").prepend( '<img src="img/'+imagenes[grupo][2]+'.jpg" alt="" style="max-height:inherit; width:auto; max-width:inherit" /> ' );




					for(var i=2; i < imagenes[grupo].length; i++){

							$('.img-remain').prepend( '<img class="col-lg-2 col-sm-3 col-md-1 col-xs-3 remain-show" src="img/'+imagenes[grupo][i]+'.jpg" alt="" />' );
							remainings();

					}



			}

			$(".img-description > p:first-child").text(titulo);
			$(".img-description > p:last-child").text(subtitulo);


			$('.image').fadeIn(500);
			setMargin();
			AlignCenter();


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


function setMargin(){

	var height= $('.img-remain').outerHeight();

	// console.log($('.img-remain').outerHeight());
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
			// console.log((a/2 - b/2));

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
