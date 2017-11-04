$(function(){						
		// 滚动条
		$("body").niceScroll({
			cursorcolor : '#a71e2b',
			cursorborder : 0,
			zindex : 99999,
		});
								
		$('[data-toggle="tooltip"]').tooltip();	
								
	
	    //   过滤下拉
	     $(".toggle-filter").click(function(){
				$(".filter-controls").slideToggle();
				return false;
		});      
		
		//  过滤
		$('#galley').mixitup({
	        effects: ['fade','grayscale'],
	        easing: 'snap',
	        transitionSpeed: 800
	    });
	    //  点击切换 页面
	    var arr=['bg-homepage.jpg','bg-about.jpg','bg-gallery.jpg','bg-services.jpg','bg-contact.jpg'];
	    $("#menu_container>div").eq(0).show()
	     $("#main_menu li>a").click(function(){
	     	$(this).addClass("high").parent().siblings().find("a").removeClass("high")
	     	var $id=$(this).parent().index();
	         $("#menu_container>div").eq($id).fadeIn(500).siblings("#menu_container>div").fadeOut(500);                           
	        $(".pagebg").fadeOut(300, function() {
			    $(this).css({
			      'background-image': 'url(img/'+arr[$id]+')',
			    }).fadeIn(300);
			}); 
	     });
	     //  小屏切换					     
	     $("#subCon li").click(function(){
	     	$(this).find("a").css("color","#fff").parent().siblings().find("a").css("color","#999999")
	     	var $id=$(this).index();
	     	 $("#menu_container>div").eq($id).fadeIn(500)
	         .siblings("#menu_container>div").fadeOut(500)
	     })
		//  hover
		 $(".icon").hover(function(){
		 		$(this).siblings("h4").css("color","#fff")						 	
		 	.parent().siblings(".head_bg").animate({
		 		"width":"100%"
		 	},500)
		 	
		 },function(){
		 	$(this).siblings("h4").css("color","#000")
		 	.parent().siblings(".head_bg").animate({
		 		"width":"60px"
		 	},500)
		 });
		 var filterList = {
			init: function () {
				// MixItUp plugin
	
				$('#gallery').mixitup({
	
					targetSelector: '.portfolio',
	
					filterSelector: '.filter',
	
					effects: ['fade'],
	
					easing: 'snap'
	
				});							
			},
		};		
		// Run the show!
	
		filterList.init();	
	})					