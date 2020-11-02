$(document).ready(function(){

    // SNACK 1
    var pesci = [
        {
            nome: 'tonno',
            peso: 10
        },
        {
            nome: 'salmone',
            peso: 5
        },
        {
            nome: 'branzino',
            peso: 8
        }, 
        {
            nome: 'orata',
            peso: 3
        }
    ];

    var pesceLeggero = pesci[0];

    for (i = 1; i < pesci.length; i++) {

        if ( pesceLeggero.peso > pesci[i].peso) {
            pesceLeggero = pesci[i];
        }
    }
    // console.log(pesceLeggero);

    // handlebars script
    var source = $('#fish-template').html;

    var template = Handlebars.compile(source);

    // stampa a schermo
    var data = [
        {
        nome: pesceLeggero.nome,
        peso: pesceLeggero.peso,
    }
    ]

    // compilazione
    var html = template(data);

    // inserimento in html della compilazione
    $('.container').append(html);




    // SNACK 2






})// <-- fine ready

