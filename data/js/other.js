jQuery(function($){ $(".hasTooltip").tooltip({"html": true,"container": "body"}); });
jQuery(function ($) {
	initChosen();
	$("body").on("subform-row-add", initChosen);

	function initChosen(event, container)
	{
		container = container || document;
		$(container).find("select").chosen({"disable_search_threshold":10,"search_contains":true,"allow_single_deselect":true,"placeholder_text_multiple":"Type or select some options","placeholder_text_single":"Select an option","no_results_text":"No results match"});
	}
});

var path = "templates/theme3528/js/";
;(function($){$(document).ready(function(){var o=$("#back-top");$(window).scroll(function(){if($(this).scrollTop()>100){o.fadeIn()}else{o.fadeOut()}});var $scrollEl=($.browser.mozilla||$.browser.msie)?$("html"):$("body");o.find("a").click(function(){$scrollEl.animate({scrollTop:0},400);})})})(jQuery);

;(function($){
	$(window).load(function() {
		$(document).on("click touchmove",function(e) {

			var container = $("#t3-mainnav .t3-navbar-collapse");
			if (!container.is(e.target)
				&& container.has(e.target).length === 0 && container.hasClass("in"))
			{
				$("#t3-mainnav .t3-navbar-collapse").toggleClass("in")
			}
		})
        // check we miss any nav
        if($(window).width() < 768){
        	$('.t3-navbar-collapse ul.nav').has('.dropdown-menu').t3menu({
        		duration : 100,
        		timeout : 50,
        		hidedelay : 100,
        		hover : false,
        		sb_width : 20
        	});
        }
    });
})(jQuery);


;(function($){
	$(document).ready(function(){
	    $(document).on("submit", ".my_form_footer", function(){
	        $.ajax({
                url: "/data/php/order.php", 
                type: "POST", 
                dataType: "json", 
                timeout: 10000,	
                data: $(this).serialize(),
                success: function(data) {
                    switch(data.st){
                        case 1:
                            alert(data.message);
                            $(this)[0].reset();
                        break;
                        case 2:
                            alert(data.message);
                        break;
                        default:
                            alert("Что-то пошло не так, попробуйте позже.");
                        break;
                    }
                },
                error: function(){
                    alert("Что-то пошло не так, попробуйте позже.");
                }
	        });
	        return(false);
	    });
	    $(document).on("submit", ".mod_tm_ajax_contact_form", function(){
	        $.ajax({
                url: "/data/php/order.php", 
                type: "POST", 
                dataType: "json", 
                timeout: 10000,	
                data: $(this).serialize(),
                success: function(data) {
                    switch(data.st){
                        case 1:
                            alert(data.message);
                            $(this)[0].reset();
                        break;
                        case 2:
                            alert(data.message);
                        break;
                        default:
                            alert("Что-то пошло не так, попробуйте позже.");
                        break;
                    }
                },
                error: function(){
                    alert("Что-то пошло не так, попробуйте позже.");
                }
	        });
	        return(false);
	    });
	});
})(jQuery);

;(function($){
	$(document).ready(function(){
		var o=$('a[href="#modal"]');
		if(o.length>0){
			o.attr("data-toggle","modal").attr("data-target", "#modal");
		}
		o.click(function(e){
			e.preventDefault();
			$("#modal").addClass('in');
			setInterval(function(){
				$("#modal #searchword").focus();
			}, 0);
		});

		$(".modalClose").on("click", function(){
			$(this).parent("#modal").removeClass("in");
		});
	});
})(jQuery);

;(function ($) {
	$(document).ready(function(){      
		if($(window).width()>767){
			$(".parallax blockquote").addClass("maxheight");
		}
		function setEqualHeight(columns)
		{
			var tallestcolumn = 0;
			columns.each(
				function()
				{
					currentHeight = $(this).height();
					if(currentHeight > tallestcolumn)
					{
						tallestcolumn = currentHeight;
					}
				}
				);
			columns.height(tallestcolumn);
		}
		$(window).load(function() {
			setEqualHeight($(".maxheight"));
		});

	});
})(jQuery);

;(function ($) {
	$(document).ready(function(){      
		if($(window).width()>767){
			$(".parallax blockquote").addClass("maxheight");
		}
		function setEqualHeight(columns)
		{
			var tallestcolumn = 0;
			columns.each(
				function()
				{
					currentHeight = $(this).height();
					if(currentHeight > tallestcolumn)
					{
						tallestcolumn = currentHeight;
					}
				}
				);
			columns.height(tallestcolumn);
		}
		$(window).load(function() {
			setEqualHeight($(".maxheight"));
		});

	});
})(jQuery);

;(function ($) {
	$(document).ready(function(){      
		if($(window).width()>767){
			$(".parallax blockquote").addClass("maxheight");
		}
		function setEqualHeight(columns)
		{
			var tallestcolumn = 0;
			columns.each(
				function()
				{
					currentHeight = $(this).height();
					if(currentHeight > tallestcolumn)
					{
						tallestcolumn = currentHeight;
					}
				}
				);
			columns.height(tallestcolumn);
		}
		$(window).load(function() {
			setEqualHeight($(".maxheight"));
		});

	});
})(jQuery);

;(function ($) {
	$(document).ready(function(){      
		if($(window).width()>767){
			$(".parallax blockquote").addClass("maxheight");
		}
		function setEqualHeight(columns)
		{
			var tallestcolumn = 0;
			columns.each(
				function()
				{
					currentHeight = $(this).height();
					if(currentHeight > tallestcolumn)
					{
						tallestcolumn = currentHeight;
					}
				}
				);
			columns.height(tallestcolumn);
		}
		$(window).load(function() {
			setEqualHeight($(".maxheight"));
		});

	});
})(jQuery);

;(function ($) {
	$(document).ready(function(){      
		if($(window).width()>767){
			$(".parallax blockquote").addClass("maxheight");
		}
		function setEqualHeight(columns)
		{
			var tallestcolumn = 0;
			columns.each(
				function()
				{
					currentHeight = $(this).height();
					if(currentHeight > tallestcolumn)
					{
						tallestcolumn = currentHeight;
					}
				}
				);
			columns.height(tallestcolumn);
		}
		$(window).load(function() {
			setEqualHeight($(".maxheight"));
		});

	});
})(jQuery);

;(function ($) {
	$(document).ready(function(){      
		if($(window).width()>767){
			$(".parallax blockquote").addClass("maxheight");
		}
		function setEqualHeight(columns)
		{
			var tallestcolumn = 0;
			columns.each(
				function()
				{
					currentHeight = $(this).height();
					if(currentHeight > tallestcolumn)
					{
						tallestcolumn = currentHeight;
					}
				}
				);
			columns.height(tallestcolumn);
		}
		$(window).load(function() {
			setEqualHeight($(".maxheight"));
		});

	});
})(jQuery);

(function ($) {
	$(document).ready(function(){
		var o = $(".owl-carousel_257");
		if (o.length) {
			var isTouch = "ontouchstart" in window;

			function preventScroll(e) {
				e.preventDefault();
			}

			$(document).ready(function () {
				o.each(function () {
					var c = $(this), responsive = {};
					var aliaces = ["-", "-xs-", "-sm-", "-md-", "-lg-"], values = [0, 480, 768, 992, 1200], i, j;
					for (i = 0; i < values.length; i++) {
						responsive[values[i]] = {};
						for (j = i; j >= -1; j--) {
							if (!responsive[values[i]]["items"] && c.attr("data" + aliaces[j] + "items")) {
								responsive[values[i]]["items"] = j < 0 ? 1 : parseInt(c.attr("data" + aliaces[j] + "items"));
							}
							if (!responsive[values[i]]["stagePadding"] && responsive[values[i]]["stagePadding"] !== 0 && c.attr("data" + aliaces[j] + "stage-padding")) {
								responsive[values[i]]["stagePadding"] = j < 0 ? 0 : parseInt(c.attr("data" + aliaces[j] + "stage-padding"));
							}
							if (!responsive[values[i]]["margin"] && responsive[values[i]]["margin"] !== 0 && c.attr("data" + aliaces[j] + "margin")) {
								responsive[values[i]]["margin"] = j < 0 ? 30 : parseInt(c.attr("data" + aliaces[j] + "margin"));
							}
						}
					}
					c.owlCarousel({
						autoplay: c.attr("data-autoplay") === "true",
						autoplayTimeout: 5000,
						loop: c.attr("data-loop") !== "false",
						nav: c.attr("data-nav") === "true",
						dots: c.attr("data-dots") === "true",
						dotsEach: c.attr("data-dots-each") ? parseInt(c.attr("data-dots-each")) : false,
						responsive: responsive,
						navText: [],
						onInitialized: function () {
							$(".owl-carousel_257 .owl-item").each(function(){
								if($(this).hasClass("cloned-gallery1")){
									$(this).find("a.fancybox-thumb").attr("data-fancybox-group", "cloned-gallery1");
								}
								if($(this).hasClass("cloned-gallery2")){
									$(this).find("a.fancybox-thumb").attr("data-fancybox-group", "cloned-gallery2");
								}
							});

							if ($.fn.magnificPopup) {
								var o = this.$element.find("[data-lightbox]").not("[data-lightbox='gallery'] [data-lightbox]"), g = this.$element.find("[data-lightbox^='gallery']");
								if (o.length) {
									o.each(function () {
										var $this = $(this);
										$this.magnificPopup({
											type: $this.attr("data-lightbox"),
											callbacks: {
												open: function () {
													if (isTouch) {
														$(document).on("touchmove", preventScroll);
														$(document).swipe({
															swipeDown: function () {
																$.magnificPopup.close();
															}
														});
													}
												}, close: function () {
													if (isTouch) {
														$(document).off("touchmove", preventScroll);
														$(document).swipe("destroy");
													}
												}
											}
										});
									})
								}
								if (g.length) {
									g.each(function () {
										var $gallery = $(this);
										$gallery.find("[data-lightbox]").each(function () {
											var $item = $(this);
											$item.addClass("mfp-" + $item.attr("data-lightbox"));
										}).end().magnificPopup({
											delegate: "[data-lightbox]",
											type: "image",
											gallery: {enabled: true},
											callbacks: {
												open: function () {
													if (isTouch) {
														$(document).on("touchmove", preventScroll);
														$(document).swipe({
															swipeDown: function () {
																$.magnificPopup.close();
															}
														});
													}
												}, close: function () {
													if (isTouch) {
														$(document).off("touchmove", preventScroll);
														$(document).swipe("destroy");
													}
												}
											}
										});
									});

								}
							}
						}
					});
				});
			});
		}
	});
})(jQuery);
;(function($){
	$(window).load(function(){
		var grid = $('#isotopeContainer_238').isotope({
			itemSelector: '.gallery-item',
			layoutMode: 'fitRows',
			getSortData: {
				name: '[data-name]',
				data: '[data-date]',
				popularity: '[data-popularity]'
			},
			sortBy: '',
			sortAscending: false
		});

		$('.portfolio_238 .sort-by').on( 'click', function() {
			var sortValue = $(this).attr('data-sort-value');
      // make an array of values
      sortValue = sortValue.split(',');
      if($(this).data('order') == 'desc'){
      	grid.isotope({ sortBy: sortValue, sortAscending: false});
      } else if($(this).data('order') == 'asc'){
      	grid.isotope({ sortBy: sortValue, sortAscending: true });
      }
  });

		$('.portfolio_238 .filter').on( 'click', function() {
			$('.portfolio_238 .filter').each(function(){
				$(this).removeClass('active');
			});
			$(this).addClass('active');
			var sortValue = $(this).attr('data-category');
      // make an array of values
      sortValue = sortValue.split(',');
      grid.isotope({ itemSelector: '.gallery-item', filter: '.'+sortValue });
      
  });

	})
})(jQuery);

;(function ($, undefined) {
	$(window).load(function(){
		function isIE() {
			var myNav = navigator.userAgent.toLowerCase();
			return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
		};
		var o = $("#swiper-slider_208");        
		if (o.length) {
			function getSwiperHeight(object, attr) {
				var val = object.attr("data-" + attr), dim;
				if (!val) {
					return undefined;
				}
				dim = val.match(/(px)|(%)|(vh)$/i);
				if (dim.length) {
					switch (dim[0]) {
						case"px":
						return parseFloat(val);
						case"vh":
						return $(window).height() * (parseFloat(val) / 100);
						case"%":
						return object.width() * (parseFloat(val) / 100);
					}
				} else {
					return undefined;
				}
			}

			function toggleSwiperInnerVideos(swiper) {
				var videos;
				$.grep(swiper.slides, function (element, index) {
					var $slide = $(element), video;
					if (index === swiper.activeIndex) {
						videos = $slide.find("video");
						if (videos.length) {
							videos.get(0).play();
						}
					} else {
						$slide.find("video").each(function () {
							this.pause();
						});
					}
				});
			}

			function toggleSwiperCaptionAnimation(swiper) {
				if (isIE() && isIE() < 10) {
					return;
				}
				var prevSlide = $(swiper.container), nextSlide = $(swiper.slides[swiper.activeIndex]);
				prevSlide.find("[data-caption-animate]").each(function () {
					var $this = $(this);
					$this.removeClass("animated").removeClass($this.attr("data-caption-animate")).addClass("not-animated");
				});
				nextSlide.find("[data-caption-animate]").each(function () {
					var $this = $(this), delay = $this.attr("data-caption-delay");
					setTimeout(function () {
						$this.removeClass("not-animated").addClass($this.attr("data-caption-animate")).addClass("animated");
					}, delay ? parseInt(delay) : 0);
				});
			}

			$(document).ready(function () {
				o.each(function () {
					var s = $(this);
					var pag = s.find(".swiper-pagination"), next = s.find(".swiper-button-next"), prev = s.find(".swiper-button-prev"), bar = s.find(".swiper-scrollbar"), h = getSwiperHeight(o, "height"), mh = getSwiperHeight(o, "min-height");
					s.find(".swiper-slide").each(function () {
						var $this = $(this), url;
						if (url = $this.attr("data-slide-bg")) {
							$this.css({"background-image": "url(" + url + ")", "background-size": "cover"})
						}
					}).end().find("[data-caption-animate]").addClass("not-animated").end();

					var slider = new Swiper(s,{
						autoplay: s.attr('data-autoplay') ? s.attr('data-autoplay') === "false" ? undefined : s.attr('data-autoplay') : 5000,
						direction: s.attr('data-direction') ? s.attr('data-direction') : "horizontal",
						effect: s.attr('data-slide-effect') ? s.attr('data-slide-effect') : "slide",
						speed: s.attr('data-slide-speed') ? s.attr('data-slide-speed') : 600,
						keyboardControl: s.attr('data-keyboard') === "true",
						mousewheelControl: s.attr('data-mousewheel') === "true",
						mousewheelReleaseOnEdges: s.attr('data-mousewheel-release') === "true",
						nextButton: next.length ? next.get(0) : null,
						prevButton: prev.length ? prev.get(0) : null,
						pagination: pag.length ? pag.get(0) : null,
						paginationClickable: pag.length ? pag.attr("data-clickable") !== "false" : false,
						paginationBulletRender: pag.length ? pag.attr("data-index-bullet") === "true" ? function (index, className) {
							return '<span class="' + className + '">' + (index + 1) + '</span>';
						} : null : null,
						scrollbar: bar.length ? bar.get(0) : null,
						scrollbarDraggable: bar.length ? bar.attr("data-draggable") !== "false" : true,
						scrollbarHide: bar.length ? bar.attr("data-draggable") === "false" : false,
						loop: s.attr('data-loop') !== "false",
						loopedSlides: 3,
						autoplayDisableOnInteraction: false,
						onTransitionStart: function (swiper) {
							toggleSwiperInnerVideos(swiper);
						},
						onTransitionEnd: function (swiper) {
							toggleSwiperCaptionAnimation(swiper);
						},
						onInit: function (swiper) {
							toggleSwiperInnerVideos(swiper);
							toggleSwiperCaptionAnimation(swiper);
							var o = $(swiper.container).find('.rd-parallax');
							var p = $(swiper.container).find('.slider-parallax-swiper');
							if(p.length){
								RDParallax_autoinit('.slider-parallax-swiper');
							}
							if (o.length && window.RDParallax) {
								o.RDParallax({layerDirection: ($('html').hasClass("smoothscroll") || $('html').hasClass("smoothscroll-all")) && !isIE() ? "normal" : "inverse"});
							}
						}
					});
					$(window).on("resize", function () {
						var mh = getSwiperHeight(s, "min-height"),
						h = getSwiperHeight(s, "height");
						if (h) {
							s.css("height", mh ? mh > h ? mh : h : h);
						}                     }).load(function () {
							s.find("video").each(function () {
								if (!$(this).parents(".swiper-slide-active").length) {
									this.pause();                           }
								});
						}).trigger("resize");
					});
			});
		}
	});

























})(jQuery);