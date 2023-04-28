// Instancia o jquery e evita conflitos
$(document).ready(function(){ // jQuery( function($){

    $('.owl-carousel').owlCarousel();

    // Configuração de produtos
    $('.featured-item a').addClass('btn btn-dark stretch-link');
    $('.featured-item:first h4').append('<span class="badge bg-secondary">novo</span>');

    // Estiliza o badge adicionado no codigo acima
    $('span.badge.bg-secondary').css({
        'font-size': '14px',
        'padding': '5px 10px',
        'border-radius': '5px'
    });

    // Manipulação de eventos 
    $('.featured-item a').on('click', function(event){
        event.preventDefault();
        alert('Produto esgotado');
    });

})