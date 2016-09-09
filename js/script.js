$(document).ready(function () {

    console.log('Script is running!');

    // Placeholder header

    var $hfName = $('#hf-name');
    $hfName.focusin(function () {
        $hfName.attr('placeholder', '');
    });
    $hfName.focusout(function () {
        $hfName.attr('placeholder', 'Name');
    });
    var $hfEmail = $('#hf-email');
    $hfEmail.focusin(function () {
        $hfEmail.attr('placeholder', '');
    });
    $hfEmail.focusout(function () {
        $hfEmail.attr('placeholder', 'Email');
    });
    var $hfPassword = $('#hf-password');
    $hfPassword.focusin(function () {
        $hfPassword.attr('placeholder', '');
    });
    $hfPassword.focusout(function () {
        $hfPassword.attr('placeholder', 'Email');
    });

    // Placeholder contact

    var $cfName = $('#cf-name');
    $cfName.focusin(function () {
        $cfName.attr('placeholder', '');
    });
    $cfName.focusout(function () {
        $cfName.attr('placeholder', 'Name');
    });
    var $cfEmail = $('#cf-email');
    $cfEmail.focusin(function () {
        $cfEmail.attr('placeholder', '');
    });
    $cfEmail.focusout(function () {
        $cfEmail.attr('placeholder', 'Email');
    });
    var $cfSubject = $('#cf-subject');
    $cfSubject.focusin(function () {
        $cfSubject.attr('placeholder', '');
    });
    $cfSubject.focusout(function () {
        $cfSubject.attr('placeholder', 'Subject');
    });
    var $cfMsg = $('#cf-message');
    $cfMsg.focusin(function () {
        $cfMsg.attr('placeholder', '');
    });
    $cfMsg.focusout(function () {
        $cfMsg.attr('placeholder', 'Message');
    });



    // Вкладки

    $('.tabpanel').hide();
    $('.tabpanel.active').fadeIn(300);
    var li_button = $('.tabs li');

    li_button.click(function () {

        var tabs = $(this).closest('.block-1-container-inner');
        var current_panel = $(this).attr('data-panelNum');
        tabs.find(li_button).removeClass('active');
        // Добавляем класс active к текущей вкладке
        $(this).addClass('active');
        // Добавляем класс active к панели, убираем с других
        tabs.find('.tabpanel').removeClass('active');
        tabs.find('#' + current_panel).addClass('active');
        // Прячем панели и показываем активную панель
        tabs.find('.tabpanel').hide();
        tabs.find('#' + current_panel).fadeIn(300);

    });
    
    // Альтернативное меню
    var $navbarAlt = $('.navbar-alt');
    var $navAltBtn = $('.nav-alt-btn');
    var $navbarOn = false;
    $navbarAlt.hide();
    $navAltBtn.click(function(){
        if ($navbarOn == false) {
        $navbarAlt.fadeIn (300);
        $navbarOn = true;
        } else if ($navbarOn == true) {
        $navbarAlt.fadeOut (300);
        $navbarOn = false;
        }
    });
    

});