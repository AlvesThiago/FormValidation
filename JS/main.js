$(document).ready(function(){
    $('#cpf').mask('000.000.000-00');
    $('#telefone').mask('(00) 00000-0000');
    $('#cep').mask('00000-000');

    $('#cadastroForm').validate({
        rules: {
            nomeCompleto: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nomeCompleto: 'Por favor, insira o seu nome completo!',
            email: 'Por favor, insira um e-mail válido!',
            telefone: 'Por favor, insira o seu telefone!',
            cpf: 'Por favor, insira o seu CPF!',
            endereco: 'Por favor, insira o seu endereço completo!',
            cep: 'Por favor, insira o seu CEP!'
        },
        submitHandler: function(form){
            console.log(form);
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos!`);
            }
        }
    });
});
