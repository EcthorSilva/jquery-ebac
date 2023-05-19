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

    /*
     * Validação de formularios 
     *  
     * To Do:
     * - checar se o nome é valido (mais de 2 caracteres)
     * - checar se o email é valido com ao menos um @ e um ponto
     * 
    */

    // Função para validar um campo de entrada
    function validate(elem) {
        if (elem.val() === '') {
            console.log('O campo ' + elem.attr('name') + ' é obrigatório.');
            elem.parent().find('.text-muted').show();

            elem.addClass('invalid');

            return false;
        } else {
            elem.parent().find('.text-muted').hide();
            elem.removeClass('invalid');
        }
    }

    // Manipulador do evento de envio do formulário
    $('body').on('submit', '.modal-body .form', function (e) {
        e.preventDefault();

        const inputName = $('#nome');
        const inputEmail = $('#e-mail');

        // Valida os campos de nome e email
        validate(inputName);
        validate(inputEmail);

        // Verifica se algum campo está inválido
        if (inputName.hasClass('invalid') || inputEmail.hasClass('invalid')) {
            console.log('Campos inválidos');
            return false;
        } else {
            // Submete o formulário se os campos forem válidos
            $(this).submit();
        }
    });

    // Manipulador do evento de perda de foco do campo nome
    $('body').on('blur', '#nome', function () {
        validate($(this));
    });

    // Manipulador do evento de perda de foco do campo email
    $('body').on('blur', '#e-mail', function () {
        validate($(this));
    });

    /*
     * Pluguins 
    */
    $('body').on('blur', '#date', function () {
        validate($(this));
        $(this).mask('00/00/0000');
    });
    $('body').on('blur', '#time', function () {
        validate($(this));
        $(this).mask('00:00:00');
    });
    $('body').on('blur', '#cep', function () {
        validate($(this));
        $(this).mask('00000-000');
    });
    $('body').on('blur', '#phone', function () {
        validate($(this));
        $(this).mask('00000-0000');
    });
    $('body').on('blur', '#cpf', function () {
        validate($(this));
        $(this).mask('000.000.000-00');
    });
})