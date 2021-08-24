$(document).ready(function () {
    $('.collapsible-title').on("click", function () {
        $(this).toggleClass('deployed');
    });
    function subindustryBtn() {
        $('.subindustry-btn').toggleClass('active-btn');
        $('.subindustry-menu').toggleClass('open-subindustry');
    }
    $('.glossary-btn').on("click", function () {
        $('.glossary-btn').toggleClass('glossary-open');
        $('.glossary-content').toggleClass('content-open');
    });
    $('.page-link').on("click", function () {
        $('body,html').animate({scrollTop: 0}, 0);
        let transition = $('.transition');
        let body = $('body');
        let pageLink = $(this);
        let widthProgress;
        console.log(scroll);
        
        //Открываем переход
        transition.addClass('load');
        body.addClass('scroll-off');

        if(pageLink.hasClass('subindustry-link')) {
            if($('.active-page')) {
                $('.active-page').removeClass('active-page');
            }
            subindustryBtn();
        }
        if($('.subindustry-menu.open-subindustry').hasClass('open-subindustry')) {
            $('.subindustry-menu.open-subindustry').removeClass('open-subindustry')
        }
        
        //Замена страницы
        setTimeout(function () {
            
            if($('.menu-content.open')) {
                $('.menu-content.open').removeClass('open');
            }
            $('.active').addClass('hidden');
            $('.active').removeClass('active');
            if ($(pageLink).hasClass('airports-id')) {
                $('.airports').removeClass('hidden');
                $('.airports').addClass('active');
                $('.subindustry-link.airports-id').addClass('active-page');
                widthProgress = 146;
               
            }
            else if ($(pageLink).hasClass('aviation-id')) {
                $('.aviation').removeClass('hidden');
                $('.aviation').addClass('active');
                $('.subindustry-link.aviation-id').addClass('active-page');
                widthProgress = 146 * 2;
               
            }
            else if ($(pageLink).hasClass('railway-engineering-id')) {
                $('.railway-engineering').removeClass('hidden');
                $('.railway-engineering').addClass('active');
                $('.subindustry-link.railway-engineering-id').addClass('active-page');
                widthProgress = 146 * 3;
               
            }
            else if ($(pageLink).hasClass('cargo-railway-id')) {
                $('.cargo-railway').removeClass('hidden');
                $('.cargo-railway').addClass('active');
                $('.subindustry-link.cargo-railway-id').addClass('active-page');
                widthProgress = 146 * 4;
               
            }
            else if ($(pageLink).hasClass('passenger-railway-id')) {
                $('.passenger-railway').removeClass('hidden');
                $('.passenger-railway').addClass('active');
                $('.subindustry-link.passenger-railway-id').addClass('active-page');
                widthProgress = 146 * 5;
               
            }
            else if ($(pageLink).hasClass('ports-id')) {
                $('.ports').removeClass('hidden');
                $('.ports').addClass('active');
                $('.subindustry-link.ports-id').addClass('active-page');
                widthProgress = 146 * 6;
               
            }
            else if ($(pageLink).hasClass('water-transport-id')) {
                $('.water-transport').removeClass('hidden');
                $('.water-transport').addClass('active');
                $('.subindustry-link.water-transport-id').addClass('active-page')
                widthProgress = 1025;
               
            }
            else if ($(pageLink).hasClass('on-main')) {
                $('.main-page').removeClass('hidden');
                $('.main-page').addClass('active');
                widthProgress = 0;
               
            }
        }, 1500)



        //Закрываеи переход
        setTimeout(function () {
            transition.removeClass('load');
            body.removeClass('scroll-off');
            $('.orange-progress-block').css({
                'width':  widthProgress + "px"
            })
        }, 2500)

    });

    $('.page-linke').on("click", function () {
        if($('.menu-content.open')) {
            $('.menu-content.open').removeClass('open');
        }
    });
    $('.subindustry-btn').on("click", function(){
        subindustryBtn();
    });
    $('.menu-button').on("click", function () {
        $(".main-navigation.mobile").toggleClass('open');
        $(".main-navigation.note").toggleClass('open');
    });
    $('.menu-button-subage').on("click", function () {
        $(".menu-content").toggleClass('open');
    });
    $('.orange-info-text').on("click", function () {
        let elementId =  $(this).prop('id');
        let popup = $('.popup-info');
        let nameInfo = $('.popup-info .popup-content .name');
        let contentInfo = $('.popup-info .popup-content .content');
        let position = 0;
        if($(window).width() < 1110) {
            if($('.main-page').hasClass('active')) {
                position = $(window).scrollTop() + 60;
            }
            else {
                position = $(window).scrollTop() + 50;
            }
            $('body').addClass('scroll-off');
        }
        else {
            position = $(this).offset().top - popup.height() / 2;
        }
        //Добавляем текст в попап
        if(elementId == "a") {
            nameInfo.html('6,6%');
            contentInfo.html('<a href="https://rosstat.gov.ru/bgd/free/B04_03/IssWWW.exe/Stg/d05/61.htm" target = "_blank">rosstat.gov.ru</a>')
        }
        else if(elementId == "b") {
            nameInfo.html('«Комплекс сооружений, включающий в себя аэродром, аэровокзал, другие сооружения, предназначенный для приема и отправки воздушных судов, обслуживания воздушных перевозок и имеющий для этих целей необходимое оборудование»');
            contentInfo.html('Статья 40 Воздушного кодекса Российской Федерации от 19.03.1997 №60-ФЗ (ред. от 08.06.2020).');
        }
        else if(elementId == "c") {
            nameInfo.html('89');
            contentInfo.html('Перечень аэропортов федерального значения утвержден распоряжением Правительства РФ от 20.04.2016 №726-р (с изменениями на 18.04.2020).');
        }
        else if(elementId == "d") {
            nameInfo.html('241 аэродром и 6 вертодромов');
            contentInfo.html('Государственный реестр аэродромов и вертодромов гражданской авиации Российской Федерации по состоянию на 13.05.2020.');
        }
        else if(elementId == "e") {
            nameInfo.html('IATA');
            contentInfo.html('International Air Transport Association (Международная ассоциация воздушного транспорта) — международная неправительственная организация.');
        }
        else if(elementId == "f") {
            nameInfo.html('67 морских портов и 117 речных портов');
            contentInfo.html('Данные Росморречфлота <a href="http://morflot.gov.ru/deyatelnost/napravleniya_deyatelnosti/portyi_rf.html ">morflot.gov.ru<a> ');
        }
        else if(elementId == "g") {
            nameInfo.html('1147,1 млн тонн в год');
            contentInfo.html('<a href="https://www.morport.com/sites/default/files/inline/files/gruzooborot_i_moshchnost_2.pdf">morport.com<a>');
        }
        else if(elementId == "h") {
            nameInfo.html('47% составляет уголь');
            contentInfo.html('<a href="http://www.rosmorport.ru/about/disclosure/report/presentation/strategicheskiy-otchet/index.html ">rosmorport.ru<a>');
        }
        else if(elementId == "i") {
            nameInfo.html('Трубопроводным транспортом');
            contentInfo.html('Постановление Правительства РФ от 27.12.2019 №1923 «О внесении изменений в некоторые акты Правительства Российской Федерации, касающиеся государственного регулирования цен (тарифов, сборов) на услуги субъектов естественных монополий в портах и услуги по использованию инфраструктуры внутренних водных путей», <a href="http://www.morvesti.ru/analitika/1692/85266/?sphrase_id=3371913">morvesti.ru<a>');
        }
        
        if(!popup.hasClass('open')) {
            popup.addClass('open');
        }
        popup.css({
            'top': position
        })
    });

    $('.popup-info .popup-content .close').on("click", function () {
        let popup = $('.popup-info');
        if($(window).width() < 1110) {
            $('body').removeClass('scroll-off');
            if(popup.hasClass('open')) {
                popup.removeClass('open');
            }
        }
        else {
            if(popup.hasClass('open')) {
                popup.removeClass('open');
            }
        }
       
    })

});