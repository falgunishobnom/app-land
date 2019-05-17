$(document).ready( function() {
    'use strict';



 /*================= headder banner downlload button js start ======================*/
    var download = $('.download');
    var downloadBtn = $('.download-btn');
    var downloadText = $('.download-text');
    // var changeTransition = 400;
    // download.hide();
    if ( matchMedia('(min-width: 768px)').matches ) {
        download.addClass('btn-text-hide');
        downloadBtn.on('mouseenter', function () {
            // console.log($(this));
            var that = $(this);
            that.find(downloadText).addClass('btn-text-hide');
            // that.find(download).fadeIn(changeTransition);
            that.find(download).removeClass('btn-text-hide');
        });
        downloadBtn.on('mouseleave', function () {
            var that = $(this);
            that.find(download).addClass('btn-text-hide');
            // that.find(downloadText).fadeIn(changeTransition);
            that.find(downloadText).removeClass('btn-text-hide');
        });
    }
 /*================= headder banner downlload button js end ======================*/

    /*================jQuery Waterwheel Image Carousel js start===================*/
    function windowSize( el ) {
        var result = 0;
        if("width" === el)
            result = window.innerWidth ? window.innerWidth : $(window).width();
        return result;
    }
    var carousel;
    function waterWheelCarouselReload( item ) {
        item = item || 3;

        carousel.reload({
            flankingItems: item,
            separation: 260,
            forcedImageWidth: 317,
            forcedImageHeight: 558,
            opacityMultiplier: 1,
            movingToCenter: function ($item) {
                $('#callback-output').prepend('movingToCenter: ' + $item.attr('id') + '<br/>');
            },
            movedToCenter: function ($item) {
                $('#callback-output').prepend('movedToCenter: ' + $item.attr('id') + '<br/>');
            },
            movingFromCenter: function ($item) {
                $('#callback-output').prepend('movingFromCenter: ' + $item.attr('id') + '<br/>');
            },
            movedFromCenter: function ($item) {
                $('#callback-output').prepend('movedFromCenter: ' + $item.attr('id') + '<br/>');
            },
            clickedCenter: function ($item) {
                $('#callback-output').prepend('clickedCenter: ' + $item.attr('id') + '<br/>');
            }
        });
    }

    $(window).on('resize', function() {

        // Reload Carousel Slider

        if( windowSize('width') > 1199 ) waterWheelCarouselReload(3);
        if( windowSize('width') <= 1199 ) waterWheelCarouselReload(3);
        if( windowSize('width') <= 991 ) waterWheelCarouselReload(1);
        if( windowSize('width') <= 767 ) waterWheelCarouselReload(0);

    });

    carousel = $("#carousel").waterwheelCarousel({
        flankingItems: 3,
        separation: 260,
        forcedImageWidth: 317,
        forcedImageHeight: 558,
        opacityMultiplier: 1,
        movingToCenter: function ($item) {
            $('#callback-output').prepend('movingToCenter: ' + $item.attr('id') + '<br/>');
        },
        movedToCenter: function ($item) {
            $('#callback-output').prepend('movedToCenter: ' + $item.attr('id') + '<br/>');
        },
        movingFromCenter: function ($item) {
            $('#callback-output').prepend('movingFromCenter: ' + $item.attr('id') + '<br/>');
        },
        movedFromCenter: function ($item) {
            $('#callback-output').prepend('movedFromCenter: ' + $item.attr('id') + '<br/>');
        },
        clickedCenter: function ($item) {
            $('#callback-output').prepend('clickedCenter: ' + $item.attr('id') + '<br/>');
        }
    });
    $('#prev').bind('click', function () {
        carousel.prev();
        return false
    });
    $('#next').bind('click', function () {
        carousel.next();
        return false;
    });
    /*================jQuery Waterwheel Image Carousel js start===================*/



    // =========== testimonial  slider javascript ============
    var testimonial =  $('.owl-testimonial');
    testimonial.owlCarousel({
        loop:true,
        margin: 0,
        nav:false,
        navText: [
            '<i class="fa fa-chevron-left" aria-hidden="true"></i>',
            '<i class="fa fa-chevron-right" aria-hidden="true"></i>'
        ],
        dots:true,
        lazyLoad: true,
        center:true,
        autoplay:true,
        autoplayTimeout:3000,
        smartSpeed: 1000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:2
            },
            1600:{
                items:4
            }
        }
    });
    // =========== testimonial slider slider javascript ============



    // =========== testimonial  slider javascript ============
    var blog =  $('.owl-blog');
    blog.owlCarousel({
        loop:true,
        margin: 0,
        nav:false,
        navText: [
            '<i class="fa fa-chevron-left" aria-hidden="true"></i>',
            '<i class="fa fa-chevron-right" aria-hidden="true"></i>'
        ],
        dots:false,
        lazyLoad: true,
        center:true,
        autoplay:true,
        autoplayTimeout:2000,
        smartSpeed: 1000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            },
            1600:{
                items:3
            }
        }
    });
    // =========== testimonial slider slider javascript ============


    //================ headder banner down-arrow js start here =================
    smoothScroll.init({
        selector: '[data-scroll]', // Selector for links (must be a class, ID, data attribute, or element tag)
        selectorHeader: null, // Selector for fixed headers (must be a valid CSS selector) [optional]
        speed: 900, // Integer. How fast to complete the scroll in milliseconds
        easing: 'easeInOutCubic', // Easing pattern to use
        offset: 0, // Integer. How far to offset the scrolling anchor location in pixels
        callback: function ( anchor, toggle ) {} // Function to run after scrolling
    });
    //================ headder banner down-arrow js end here =================


    // ======================feature section animation js start here ==================

    window.sr = ScrollReveal();
    // window.sr = ScrollReveal({ reset: true });
    sr.reveal('.box-1', {delay: 0});
    sr.reveal('.box-2', {delay: 100});
    sr.reveal('.box-3', {delay: 200});
    sr.reveal('.box-4', {delay: 300});
    // ==================== feature section animation js end here ======================


    /*************************** price plan section popup start **********************************/
    var learnBox = $('.learn-box');
    var learnBoxDuration = 700;
    learnBox.hide();
    $('.learn').on('click', function(e){
        e.preventDefault();
        learnBox.fadeIn(learnBoxDuration);
    });
    $('.learn-box-close').on('click', function(){
        learnBox.fadeOut(learnBoxDuration);
    });
    /*************************** price plan section popup end **********************************/


    // =================  Help section navTab js here ======================
    var navTab = $('.developer_section_nav ul li');
    navTab.on('click', function(e) {
        e.preventDefault();
        navTab.removeClass('activeted');
        $(this).addClass('activeted').fadeIn();
        $('.code_block .single-block').hide();
        var selectedCode = $(this).data('code');
        $('.'+selectedCode).show().fadeIn();
    });
    // =================  Help section navTab js end here ======================


    /* ================================ preloder js start here ======================================== */
    // site preloader -- also uncomment the div in the header and the css style for #preloader
    $(window).on('load', function(){
        $('#preloader').fadeOut('slow',function(){$(this).remove();});
    });
    /* ================================ preloder js end here ======================================== */


});