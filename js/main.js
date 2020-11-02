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

    // handlebars script
    var source = $('#fish-template').html();
    var template = Handlebars.compile(source);

    var pesceLeggero = pesci[0];

    for (var i = 1; i < pesci.length; i++) {

        if ( pesceLeggero.peso > pesci[i].peso) {
            pesceLeggero = pesci[i];
        }
    }
    // console.log(pesceLeggero);

    

    // stampa a schermo
    var data =
        {
        nome: pesceLeggero.nome,
        peso: pesceLeggero.peso,
    };

    // compilazione
    var html = template(data);

    // inserimento in html della compilazione
    $('.container').append(html);




    // SNACK 2
    // array nomi
    var listaNomi = ['Gino', 'Pietro', 'Lulu', 'Laura', 'France', 'Pasqua'];

    // valore massimo inseribile dall'utente 
    limit = listaNomi.length - 1;

    // richiesta valori min e max 
    var min = parseInt(prompt('Inserisci valore minimo, tra 0 e ' + limit).trim());
    var max = parseInt(prompt('Inserisci valore massimo, tra ' + min + ' e ' + limit).trim());


    var newListaNomi = [];
    
    // ciclo per individuare i nomi tra i valori inseriti
    for (var i = min; i <= max; i++) {

        newListaNomi.push(listaNomi[i]);

    }

    // console.log(newListaNomi);






})// <-- fine ready

