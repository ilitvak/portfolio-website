$(document).ready(function(){$("#about-link").click(function(){$("html body").animate({scrollTop:$("#about").offset().top},2e3)}),$(window).scroll(function(){$("#portfolio-link").click($(window).width()>1e3?function(){$("html body").animate({scrollTop:$("#portfolio-item-1").offset().top},2e3)}:function(){$("html body").animate({scrollTop:$("#portfolio-header").offset().top},2e3)})})}),$(document).ready(function(){var a=$("#portfolio-item-1").offset().top,b=$("#portfolio-item-2").offset().top,c=$("#portfolio-item-3").offset().top,d=$("#about").offset().top;$(window).scroll(function(){$(window).width()>768&&($(this).scrollTop()<a?$("#header").is(":visible")&&$("#header").fadeOut("slow"):$(this).scrollTop()>a&&$("#header").is(":hidden")&&$("#header").fadeIn("slow")),$(window).width()>1e3&&($(this).scrollTop()>b-100||$(this).scrollTop()<a+25?(console.log("portfolio item 1 hide called"),1==$("#portfolio-description-1").css("opacity")&&($("#portfolio-description-1").animate({left:0,opacity:0},1e3,function(){$(this).hide()}),$("#portfolio-image-1").animate({right:0,opacity:0},1e3,function(){$(this).hide()}))):($(this).scrollTop()>a+25||$(this).scrollTop()<b-100)&&(console.log("portfolio item 1 show called"),0==$("#portfolio-description-1").css("opacity")&&($("#portfolio-description-1").show().animate({left:75,opacity:1},1e3),$("#portfolio-image-1").show().animate({right:50,opacity:1},1e3))),$(this).scrollTop()>c-100||$(this).scrollTop()<b+25?1==$("#portfolio-description-2").css("opacity")&&($("#portfolio-description-2").animate({right:0,opacity:0},1e3,function(){$(this).hide()}),$("#portfolio-image-2").animate({left:0,opacity:0},1e3,function(){$(this).hide()})):($(this).scrollTop()>b+25||$(this).scrollTop()<c-100)&&0==$("#portfolio-description-2").css("opacity")&&($("#portfolio-description-2").show().animate({right:75,opacity:1},1e3),$("#portfolio-image-2").show().animate({left:50,opacity:1},1e3)),$(this).scrollTop()<c+25||$(this).scrollTop()>d-100?1==$("#portfolio-description-3").css("opacity")&&($("#portfolio-description-3").animate({left:0,opacity:0},1e3,function(){$(this).hide()}),$("#portfolio-image-3").animate({right:0,opacity:0},1e3,function(){$(this).hide()})):($(this).scrollTop()>c+25||$(this).scrollTop()<d-100)&&0==$("#portfolio-description-3").css("opacity")&&($("#portfolio-description-3").show().animate({left:75,opacity:1},1e3),$("#portfolio-image-3").show().animate({right:50,opacity:1},1e3)))})});