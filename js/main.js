

'use strict';

function validarForm() {
    const name = document.querySelector('.nomeForm').value.trim();
    const lastName = document.querySelector('.sobrenomeForm').value.trim();
    const email = document.querySelector('.emailForm').value.trim();

    // Regex para validação do email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name) {
      alert('Por favor, preencha o campo Nome.');
      return;
    }

    if (!lastName) {
      alert('Por favor, preencha o campo Sobrenome.');
      return;
    }

    if (!email || !emailRegex.test(email)) {
      alert('Por favor, insira um email válido.');
      return;
    }

    alert('Inscrito com Sucesso!');
  }

  $(document).ready(function () {
    $("#loginForm").on("submit", function (event) {
        event.preventDefault(); // Previne envio padrão do formulário

        const nome = $("#nome").val().trim();
        const cpf = $("#cpf").val().trim();
        const senha = $("#senha").val().trim();

        let isValid = true;

        // Validação do Nome
        if (nome === "") {
            showError("#nomeError", "O campo nome é obrigatório.");
            isValid = false;
        } else {
            hideError("#nomeError");
        }

        // Validação do CPF
        if (!validateCPF(cpf)) {
            showError("#cpfError", "CPF inválido.");
            isValid = false;
        } else {
            hideError("#cpfError");
        }

        // Validação da Senha
        if (senha === "") {
            showError("#senhaError", "O campo senha é obrigatório.");
            isValid = false;
        } else {
            hideError("#senhaError");
        }

        // Se tudo for válido, redireciona para home.html
        if (isValid) {
            window.location.href = "home.html";
        }
    });

    function showError(selector, message) {
        $(selector).text(message).show();
    }

    function hideError(selector) {
        $(selector).hide();
    }

    // Validador de CPF
    function validateCPF(cpf) {
        cpf = cpf.replace(/[^\d]/g, ""); // Remove caracteres não numéricos
        if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

        let soma = 0;
        let resto;
        for (let i = 1; i <= 9; i++) {
            soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
        }
        resto = (soma * 10) % 11;
        if (resto === 10 || resto === 11) resto = 0;
        if (resto !== parseInt(cpf.substring(9, 10))) return false;

        soma = 0;
        for (let i = 1; i <= 10; i++) {
            soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
        }
        resto = (soma * 10) % 11;
        if (resto === 10 || resto === 11) resto = 0;
        return resto === parseInt(cpf.substring(10, 11));
    }
});

(function ($) {

    /*------------------
        Preloader
    --------------------*/
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");

        /*------------------
            Portfolio filter
        --------------------*/
        $('.portfolio__filter li').on('click', function () {
            $('.portfolio__filter li').removeClass('active');
            $(this).addClass('active');
        });
        if ($('.portfolio__gallery').length > 0) {
            var containerEl = document.querySelector('.portfolio__gallery');
            var mixer = mixitup(containerEl);
        }

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    //Masonary
    $('.work__gallery').masonry({
        itemSelector: '.work__item',
        columnWidth: '.grid-sizer',
        gutter: 10
    });

    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    /*------------------
		Hero Slider
	--------------------*/
    $('.hero__slider').owlCarousel({
        loop: true,
        dots: true,
        mouseDrag: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items: 1,
        margin: 0,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
    });

    var dot = $('.hero__slider .owl-dot');
    dot.each(function () {
        var index = $(this).index() + 1;
        if (index < 10) {
            $(this).html('0').append(index);
        } else {
            $(this).html(index);
        }
    });

    /*------------------
        Testimonial Slider
    --------------------*/
    $(".testimonial__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 3,
        dots: true,
        dotsEach: 2,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            992: {
                items: 3
            },
            768: {
                items: 2
            },
            320: {
                items: 1
            }
        }
    });

    /*------------------
        Latest Slider
    --------------------*/
    $(".latest__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 3,
        dots: true,
        dotsEach: 2,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            992: {
                items: 3
            },
            768: {
                items: 2
            },
            320: {
                items: 1
            }
        }
    });

    /*------------------
        Logo Slider
    --------------------*/
    $(".logo__carousel").owlCarousel({
        loop: true,
        margin: 100,
        items: 6,
        dots: false,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            992: {
                items: 5
            },
            768: {
                items: 4
            },
            480: {
                items: 3
            },
            320: {
                items: 2
            }
        }
    });

    /*------------------
        Video Popup
    --------------------*/
    $('.video-popup').magnificPopup({
        type: 'iframe'
    });

    /*------------------
        Counter
    --------------------*/
    $('.counter_num').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

})(jQuery);