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
    $('.featured-item a').on('click', function (event) {
        event.preventDefault();
        alert('Produto esgotado');
    });

    /*
     * Callback
     *
     * entendendo ações que começam ao termino de outra
     */
    // $('.featured-item:nth(1)')
    //     .hide(2000, function(){
    //         // este é o callback
    //         console.log($(this).find('h4').text() + ' esgotado');
    //     })
    //     .show(2000, function(){
    //         console.log($(this).find('h4').text() + ' em estoque');
    //     })

    /*
     * Animações
     */
    // const duracao = 1000; // equivale a 1 segundo
    // $('.featured-item:nth(0)')
    //     .hide(duracao)
    //     .show(duracao)
    //     .fadeOut(duracao)
    //     .fadeIn(duracao)

    const duracao = 1000; // equivale a 1 segundo
    $('#form-submit').on('click', function (e) {
        e.preventDefault()

        if ($('#email').val().length != '') {
            $('#email').animate({
                opacity: "toggle",
                top: "-50"
            }, duracao, function () {
                console.log($(this).val());
            });
        }
    });

    /*
     * Ouvinte de eventos .nav-modal-open
    */

    // Adiciona um ouvinte de evento de clique ao elemento com classe 'nav-modal-open'
    $('.nav-modal-open').on('click', function (e) {
        // Evita que a ação padrão do evento de clique seja executada (neste caso, abrir uma página)
        e.preventDefault();
        // Obtém o valor do atributo 'rel' do elemento clicado
        let elem = $(this).attr('rel');
        // Define o conteúdo da classe 'modal-body' com o conteúdo do elemento com id correspondente ao valor do atributo 'rel'
        $('.modal-body').html($('#' + elem).html());
        // Altera o titulo do modal
        $('.modal-header h5.modal-title').html($(this).text());
        // Cria um novo objeto Modal com o elemento com id 'modalId'
        let myModal = new bootstrap.Modal($('#modalId'));
        // Exibe o modal
        myModal.show();
    });
})