$(document).ready(function(){

    // snack 1
    var pesci = [
        {
            nome: 'tonno',
            peso: 10,
        },
        {
            nome: 'salmone',
            peso: 5,
        },
        {
            nome: 'branzino',
            peso: 8,
        }, 
        {
            nome: 'orata',
            peso: 3,
        },   
];

var pesceLeggero = pesci[0]

for (i = 1; i < pesci.length; i++) {

    if ( pesceLeggero.peso > pesci[i].peso) {
        pesceLeggero = pesci[i];
    }
}
console.log(pesceLeggero);




})// <-- fine ready

