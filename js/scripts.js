function somenteNumeros(num) {
    var er = /[^0-9.]/;
    er.lastIndex = 0;
    var campo = num;
    if (er.test(campo.value)) {
      campo.value = "";
  }
}

var contador = 1;
$('#cadastrarItem').submit(function(event) {

    event.preventDefault();
    soma = $('#quantidade').val() * $('#valorUni').val();
    arredondado = parseFloat(soma.toFixed(2));

    $('#tabela').append($('<tr>', {
        id: 'linha-' + contador
    }));

    $('#linha-' + contador).append($('<th>', {
        scope: 'row',
        html: '<button id="apaga-'+contador+'" onclick="apagaLinha('+contador+','+arredondado+');"><i class="fas fa-minus"></i></button>'
    }));

    $('#linha-' + contador).append($('<td>', {
        id: 'descricao-' + contador,
        text: $('#descricao').val()
    }));

    $('#linha-' + contador).append($('<td>', {
        id: 'valorUni-' + contador,
        text: 'R$' + $('#valorUni').val()
    }));

    $('#linha-' + contador).append($('<td>', {
        id: 'quantidade-' + contador,
        text: $('#quantidade').val()
    }));

    $('#linha-' + contador).append($('<td>', {
        id: 'lote-' + contador,
        text: 'R$' + arredondado
    }));

    $('#total').text(parseFloat($('#total').text().replace('R$','')) + arredondado);
    $('#total').text('R$ '+ $('#total').text());

    $('#quantidade').val('');
    $('#valorUni').val('');
    $('#descricao').val('');

    contador++;
});

function apagaLinha(linha, valor) {

    total = parseFloat($('#total').text().replace('R$','')) - valor;
    arredondado = parseFloat(total.toFixed(2));

    $('#total').text('R$ '+ arredondado);
    $('#linha-' + linha).html('');
}

$('#calcularDesconto').submit(function(event) {

    event.preventDefault();
    var valor = $('#valor').val();
    var desconto = $('#descontoVal').val();

    var valorDescontado = (desconto / 100) * valor;
    var valorComDesconto = valor - ((desconto / 100) * valor);

    $('#valorComDesconto').val('R$ ' + valorComDesconto);
    $('#valorDescontado').val('R$ ' + valorDescontado);

});