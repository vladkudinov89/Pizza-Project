/**
 * Created by User on 21.04.2017.
 */

;(function () {
    //Расчитываем заказ
    function CalcOrder() {

        var total = 0;

        $('[data-checked="1"]').each(function (index, elem) {

            var price = parseInt($(this).attr('data-product-price'));
            var amount = parseInt($(this).attr('data-product-amount'));

            total += amount * price;

        });

        $('#orderTotal').text(total);


    }//CalcOrder

    $(document).ready(function () {

        $('#fullpage').fullpage({
            /*sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],*/
            anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage','5thpage','6thpage'],
            menu: '#menu',
            bigSectionsDestination: top,
            scrollingSpeed: 700,
            slidesNavigation: true,
            paddingTop: '100px',
            navigation: true,
           /* autoScrolling:false,*/
           /* normalScrollElements: '#section4',*/
            navigationPosition: 'right',
            navigationTooltips: ['Начало', 'Выбрать пиццу', 'Выбрать закуску', 'Выбрать напитки', 'Доставка и оплата'
                , 'Мы в соц. сетях']
            /* paddingBottom: '10px'*/
            /* parallax: true,
             parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'}*/
        });


        $('#section0 .owl-carousel').owlCarousel({

            items: 1,
            nav: true,
            loop: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            dots: false
        });


        $('#section1 .owl-carousel').owlCarousel({

            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 2,
                    nav: true,
                    loop: true
                },

                360: {
                    items: 2,
                    nav: true,
                    loop: true
                },

                481: {
                    items: 2,
                    nav: true,
                    loop: true
                },

                768: {
                    items: 2,
                    nav: true,
                    loop: true,
                    margin: 30
                },

                1024: {
                    items: 3,
                    nav: true,
                    loop: true,
                    margin: 20
                },

                1200: {
                    items: 3,
                    nav: true,
                    loop: true,
                    margin: 30
                }
            }

        });

        $('#section2 .owl-carousel').owlCarousel({
            nav : true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true,
                    loop: true
                },

                360: {
                    items: 1,
                    nav: true,
                    loop: true
                },

                481: {
                    items: 2,
                    nav: true,
                    loop: true
                },

                768: {
                    items: 2,
                    nav: true,
                    loop: true,
                    margin: 20
                },

                1024: {
                    items: 3,
                    nav: true,
                    loop: true,
                    margin: 30
                },

                1200: {
                    items: 4,
                    nav: true,
                    loop: true,
                    margin: 30
                }
            }


        });

        $('#section3 .owl-carousel').owlCarousel({

            items: 3,
            nav: true,
            loop: true,
            dots: false,
            navText: ''

        });


        $('.pizza__cart-button').click(function () {

            $('[data-checked="1"]').filter(function (index) {

                $('[data-checked="1"] .amount-item-section').css("display", "inline-block");
                $('[data-checked="1"] .pizza__cart-button').css("display", "none");

            });

        });


        $('.test .check-box-container').click(function () {

            var span = $(this).children('span').first();

            span.toggleClass('checked-false');

            if (span.hasClass('checked-false')) {
                $(this).parent().parent().attr('data-checked', '0');
                span.css("background-color", "transparent");
            }//if
            else {
                $(this).parent().parent().attr('data-checked', '1');
                span.css("background", "#9e7b46");
            }

            CalcOrder();
        });


        $('.item-change-up').click(function () {

            var value = parseInt($(this).prev().text());

            if (value <= 2) {
                value++;
                $(this).prev().text(value);
                $(this).parent().parent().attr('data-product-amount', value);
                CalcOrder();
            }//if

        });


        $('.item-change-down').click(function () {

            var value = parseInt($(this).next().text());

            if (value > 1) {
                value--;
                $(this).next().text(value);
                $(this).parent().parent().attr('data-product-amount', value);
                CalcOrder();
            }//if

        });



    });
})();
