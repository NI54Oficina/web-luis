var hidden=true;
var menu=false;
var marginGetter;

$(document).on("ready",function(){
	CenterToParent();
	toShow();
	menuDisplay();
	remainings();
	changeProject();


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
			var src = $(this).find('img').attr('src');
			$('.portfolio').fadeOut(300);
			$('.portfolio-2').fadeOut(300);
			$('.nav-porfolio').fadeOut(300);
			$("#img-to-display").attr("src", src);
			$('.image').fadeIn(500);
			// $('#btn-menu').css('visibility','hidden');

 setMargin();


		})

}

function closeGallery(){
	$('.image').fadeOut(500);
	$('.portfolio').fadeIn(500);
	$('.portfolio-2').fadeIn(500);
	$('.nav-porfolio').fadeIn(300);
	// $('.button-menu').css('visibility','visible');
}

function hideDisplay() {
	 height= $('.img-remain').outerHeight();

	 realMargin =parseInt($('.img-description').css('margin-top'));

	if(hidden){

			$(".img-description").animate({marginTop:(realMargin-height-15)+'px'}, 1000);
			$('#button-display').text('-');

			hidden=false;
	}else{

			$(".img-description").animate({marginTop:-height+'px'}, 1000);
			$('#button-display').text('+')
			hidden=true;
	}


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


function remainings(){
		$('.remain-show').click(function(){
			var src = $(this).attr('src');
			$("#img-to-display").attr("src", src);
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
