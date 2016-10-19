var hidden=true;
var menu=false;
var marginGetter;

$(document).on("ready",function(){
	CenterToParent();
	toShow();
	backButton();

	menuDisplay();


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
		console.log($(this).outerHeight());
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
		console.log($(this).outerHeight());
		var paddingTop= ($(parent).innerHeight()/2)-($(this).outerHeight()/2);
		$(this).css("display","inline-block");
		$(this).css("position","relative");

		$(this).css("top",paddingTop+"px");
	});
}


function toShow(){

	$('.to-show').on('click', function(){
			var src = $(this).attr('src');
			$('.portfolio').fadeOut(300);
			$('.portfolio-2').fadeOut(300);
			$('.nav-porfolio').fadeOut(300);
			$("#img-to-display").attr("src", src);
			$('.image').fadeIn(500);

 setMargin();


		})

}

function closeGallery(){
	$('.image').fadeOut(500);
	$('.portfolio').fadeIn(500);
	$('.portfolio-2').fadeIn(500);
}


function hideDisplay() {
	 height= $('.img-remain').outerHeight();

	 realMargin =parseInt($('.img-description').css('margin-top'));

	if(hidden){

		console.log(-height);
			$(".img-description").animate({marginTop:(realMargin-height-15)+'px'}, 1000);
			$('#button-display').text('-');
			hidden=false;
	}else{

			$(".img-description").animate({marginTop:-height+'px'}, 1000);
			$('#button-display').text('+')
			hidden=true;
	}


	}



	function backButton(){

			$('#backButton').click(function(){

								$("#inicio").fadeOut( "slow");
									$(".pantalla").fadeIn( "slow");


					console.log("melnia was here");
			//
			// 	history.back();
		});
			//

	}

function setMargin(){
	var height= $('.img-remain').outerHeight();
	$('.img-description').css('min-height',height);
	$('.img-description').css('margin-top','-'+height+'px');

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





		});

	}
